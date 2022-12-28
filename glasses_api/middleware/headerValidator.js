var con = require('../config/database');
var cryptoLib = require('cryptlib');
var shaKey = cryptoLib.getHashSha256(process.env.KEY, 32);
const { default: localizify } = require('localizify');
const en = require('../languages/en.js');
const { t } = require('localizify');
const { sendotp } = require('../modules/v1/Auth/auth_model');

//methods that do not check token
var bypassMethod = new Array("sendnotification", "signup", "login", "forgotpassword", "sendOtp", "verifyOtp");

//method that not require api key
var bypassHeaderKey = new Array("sendnotification");

var headerValidator = {

    /* Function to extract the header language and set language environment */
    extractHeaderLanguage: function (req, res, callback) {
        var language = (req.headers['accept-language'] != undefined && req.headers['accept-language'] != '') ? req.headers['accept-language'] : "en";
        console.log(language)
        req.language = en;
        req.lang = language;
        localizify.add(language, en).setLocale('en');
        callback();
    },


    /* Function to validate API key of header (Note : Header keys are encrypted) */
    validateHeaderApiKey: function (req, res, callback) {
        var api_key = (req.headers['api-key'] != undefined && req.headers['api-key'] != '') ? req.headers['api-key'] : "";
        var path_data = req.path.split("/");
        if (bypassHeaderKey.indexOf(path_data[2]) === -1) {
            if (api_key == process.env.API_KEY) {
                callback();
            } else {
                headerValidator.sendresponse(req, res, 401, '-1', { keyword: 'rest_keywords_invalid_api_key', components: {} }, null);
            }
        } else {
            callback();
        }
    },

    //Function to validate the token of any user before every request
    validateHeaderToken: function (req, res, callback) {

       
        var path_data = req.path.split("/");
       
        if (bypassMethod.indexOf(path_data[3]) === -1) {
            if (req.headers['token'] && req.headers['token'] != '') {
               
                var headtoken = req.headers['token'];
                if (headtoken !== '') {
                    if (path_data[2] == 'admin') {
                       
                        con.query("SELECT * FROM tbl_admin_device WHERE token = ? ", [headtoken], function (err, result) {
                             
                            if (!err && result[0] != undefined) {
                               
                                req.admin_id = result[0].admin_id;
                                callback();
                            } else {
                             headerValidator.sendresponse(req, res, 401, '-1', {keyword: 'text_rest_invalid_token111',components: {}}, null);
                            }
                        });      
                    } else {
                        
                        con.query("SELECT * FROM tbl_user_device WHERE token = ? ", [headtoken], function (err, result) {
                           
                            if (!err && result[0] != undefined) {
                                req.user_id = result[0].user_id;
                                callback();
                            } else {
    
                                headerValidator.sendresponse(req, res, 401, '-1', { keyword: 'rest_keywords_tokeninvalid', components: {} }, null);
    
                            }
                        });
                    }
                    
                } else {
                    headerValidator.sendresponse(req, res, 401, '-1', { keyword: 'rest_keywords_tokeninvalid', components: {} }, null);
                }
            } else {

                headerValidator.sendresponse(req, res, 401, '-1', { keyword: 'rest_keywords_tokeninvalid', components: {} }, null);
            }
        } else {
            callback();
        }
    },

    /* Function to decrypt the data of request body */
    decryption: function (req, callback) {
        if (req.body != undefined && Object.keys(req.body).length !== 0) {
            var request = JSON.parse(cryptoLib.decrypt(req.body, shaKey, process.env.IV));
            request.lang = req.lang;
            request.user_id = req.user_id;
            callback(request);

        } else {
            callback({});
        }
    },

    /*  Function to encrypt the response body before sending response */
    encryption: function (req, callback) {
        var cryptoLib = require('cryptlib');
        var shaKey = cryptoLib.getHashSha256(process.env.KEY, 32);
        var response = cryptoLib.encrypt(JSON.stringify(response_data), shaKey, process.env.IV);
        callback(response);
    },

    //Function to return response for any api
    sendresponse: function (req, res, statuscode, responsecode, responsemessage, responsedata) {
        headerValidator.getMessage(req.lang, responsemessage.keyword, responsemessage.components, function (formedmsg) {
            if (responsedata != null) {
                response_data = { code: responsecode, message: formedmsg, data: responsedata };
                // headerValidator.encryption(response_data, function (response) {
                res.status(statuscode);
                res.json(response_data);
                // });
            } else {
                response_data = { code: responsecode, message: formedmsg };
                // headerValidator.encryption(response_data, function (response) {
                res.status(statuscode);
                res.json(response_data);
                // });
            }
        });
    },

    //Function to check validation rules for all api's
    checkValidationRules: function (request, response, rules, messages, keywords) {
        var v = require('Validator').make(request, rules, messages, keywords);
        if (v.fails()) {
            var Validator_errors = v.getErrors();
            for (var key in Validator_errors) {
                error = Validator_errors[key][0];
                break;
            }
            response_data = {
                code: '0',
                message: error
            };
            // headerValidator.encryption(response_data, function (responseData) {
            response.status(200);
            response.json(response_data);
            // });
            return false;
        } else {
            return true;
        }
    },

    //Function to send users language from any place
    getMessage: function (requestLanguage, keywords, components, callback) {
        localizify
            .add('en', en)
            .setLocale(requestLanguage);
        var returnmessage = t(keywords, components);
        callback(returnmessage);
    },




}
module.exports = headerValidator;


