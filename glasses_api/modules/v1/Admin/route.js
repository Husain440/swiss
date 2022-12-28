var express = require('express');
var middleware = require('../../../middleware/headerValidator');
var common = require('../../../config/common');
var admin_model = require('./Admin_model');
var router = express.Router();
var auth_model = require('../Auth/auth_model');


//api for signup
router.post("/signup", function (req, res) {
  
        var rules = {
            full_name:'required',
            email: 'required|email',
            password: 'required',
            device_type: '',
            device_token: '',
            uuid: '',
            os_version: '',
            device_name: '',
            model_name: '',
            ip: '',           
        }
        
        const messages = {
            'required': req.language.required,
            'in': req.language.in,
        }
       
        var request = JSON.parse(req.body)
      
        if (middleware.checkValidationRules(request, res, rules, messages, {})) {
            admin_model.signUpUsers(request, function (responsecode, responsemsg, responsedata) {
            middleware.sendresponse(req, res, 200, responsecode, responsemsg, responsedata);
            });
        }
    });

//api for login
router.post("/login", function (req, res) {

        var rules = {           
            email:'required',
            password: 'required',           
        }
        const messages = {
            'required': req.language.required,
            'in': req.language.in,
        }
        var request = JSON.parse(req.body)
        // checks all validation rules defined above and if error send back response
        if (middleware.checkValidationRules(request, res, rules, messages, {})) {
            admin_model.checkLogin(request, function (responsecode, responsemsg, responsedata) {
                middleware.sendresponse(req, res, 200, responsecode, responsemsg, responsedata);
            });
        }
    });

//api for forgotpassword
router.post("/forgotpassword", function (req, res) {

        var rules = {
            email: 'required|email'
        }

        const messages = {
            'required': req.language.required,
            'email': req.language.email,
        }
        var request = JSON.parse(req.body)
        // checks all validation rules defined above and if error send back response
        if (middleware.checkValidationRules(request, res, rules, messages, {})) {
            admin_model.forgotPassword(request, function (responsecode, responsemsg, responsedata) {
                middleware.sendresponse(req, res, 200, responsecode, responsemsg, responsedata);
            });
        }
    });

//api for search restaurant
router.post("/find_restaurant", function (req, res) {

    middleware.decryption(req, function (request) {
        var request = request
        var rules = {
            search_text:'',
        }
         
        const messages = {
            'required': req.language.required,
        }

        // checks all validation rules defined above and if error send back response
        if (middleware.checkValidationRules(request, res, rules, messages, {})) {
            auth_model.find_restaurant(request, function (responsecode, responsemsg, responsedata) {
                middleware.sendresponse(req, res, 200, responsecode, responsemsg, responsedata);
            });
        }
    });
    });

//api for userdetails
router.post("/userdetails", function (req, res) {   
  
    admin_model.userdetail(req, function (responsecode, responsemsg, responsedata) {
        middleware.sendresponse(req, res, 200, responsecode, responsemsg, responsedata);
    });
    });

//api for remove user
router.post("/deleteuser", function (req, res) {
console.log("1111111")
    var rules = {
        id: 'required',
       
    }
     
    const messages = {
        'required': req.language.required,
    }
  
    var request = JSON.parse(req.body)

    // checks all validation rules defined above and if error send back response
    if (middleware.checkValidationRules(request, res, rules, messages, {})) {
        admin_model.removeuser(request, function (responsecode, responsemsg, responsedata) {
            middleware.sendresponse(req, res, 200, responsecode, responsemsg, responsedata);
        });
    }

    });

//api for remove user
router.post("/deleteproduct", function (req, res) {
   
        var rules = {
            id: 'required',
           
        }
         
        const messages = {
            'required': req.language.required,
        }
      
        var request = JSON.parse(req.body)
    
        // checks all validation rules defined above and if error send back response
        if (middleware.checkValidationRules(request, res, rules, messages, {})) {
            admin_model.removeproduct(request, function (responsecode, responsemsg, responsedata) {
                middleware.sendresponse(req, res, 200, responsecode, responsemsg, responsedata);
            });
        }
    
    });

//api for add product in admin panel
router.post("/addproduct", function (req, res) {
  
    var rules = {
        product_type_id:'',
        brand_id:'',
        auction_id:'',
        name:'required',
        price: 'required',
        description: 'required',
        launch_year: 'required',
        images: 'required',
                  
    }
    
    const messages = {
        'required': req.language.required,
        'in': req.language.in,
    }
   
    var request = JSON.parse(req.body)
    //var request = req.body
  
    if (middleware.checkValidationRules(request, res, rules, messages, {})) {
        admin_model.add_product(request, function (responsecode, responsemsg, responsedata) {
        middleware.sendresponse(req, res, 200, responsecode, responsemsg, responsedata);
        });
    }
    });

//api for view single user
router.post("/viewuser", function (req, res) {
    console.log("1111111")
        var rules = {
            id: 'required',
           
        }
         
        const messages = {
            'required': req.language.required,
        }
      
        var request = JSON.parse(req.body)
    
        // checks all validation rules defined above and if error send back response
        if (middleware.checkValidationRules(request, res, rules, messages, {})) {
            admin_model.viewuser(request, function (responsecode, responsemsg, responsedata) {
                middleware.sendresponse(req, res, 200, responsecode, responsemsg, responsedata);
            });
        }
    
    });

//api for status single user
router.post("/userstatus", function (req, res) {
    
        var rules = {
            id: 'required',      
        }
         
        const messages = {
            'required': req.language.required,
        }
      
        var request = JSON.parse(req.body)
    
        // checks all validation rules defined above and if error send back response
        if (middleware.checkValidationRules(request, res, rules, messages, {})) {
            admin_model.activestatus(request, function (responsecode, responsemsg, responsedata) {
                middleware.sendresponse(req, res, 200, responsecode, responsemsg, responsedata);
            });
        }
    
    });

//api for view single admin
router.post("/singleadmin", function (req, res) {
    console.log("1111111")
        var rules = {
            id: 'required',
           
        }
         
        const messages = {
            'required': req.language.required,
        }
      
        var request = JSON.parse(req.body)
    
        // checks all validation rules defined above and if error send back response
        if (middleware.checkValidationRules(request, res, rules, messages, {})) {
            admin_model.viewadmin(request, function (responsecode, responsemsg, responsedata) {
                middleware.sendresponse(req, res, 200, responsecode, responsemsg, responsedata);
            });
        }
    
    });

//api for edit product
router.post("/editProfile", function (req, res) {

    var rules = {
        id:'',
       
    }
    const messages = {
        'required': req.language.required
    }

    var request = JSON.parse(req.body)
    
    // checks all validation rules defined above and if error send back response
    if (middleware.checkValidationRules(request, res, rules, messages, {})) {
        admin_model.editProfile( request, function (responsecode, responsemsg, responsedata) {
            middleware.sendresponse(req, res, 200, responsecode, responsemsg, responsedata);
        });
    }
    });

//api for userdetails
router.post("/allproducts", function (req, res) {   
   
     admin_model.getProductDetails(req, function (responsecode, responsemsg, responsedata) {
         middleware.sendresponse(req, res, 200, responsecode, responsemsg, responsedata);
     });
    });

//api for brands
router.post("/allbrands", function (req, res) {   
   
    admin_model.getBrandDetails(req, function (responsecode, responsemsg, responsedata) {
        middleware.sendresponse(req, res, 200, responsecode, responsemsg, responsedata);
    });
   });

//api for brands
router.post("/allauction", function (req, res) {   
   
    admin_model.getAuctionDetails(req, function (responsecode, responsemsg, responsedata) {
        middleware.sendresponse(req, res, 200, responsecode, responsemsg, responsedata);
    });
   });

//api for brands
router.post("/allproducttype", function (req, res) {   
   
    admin_model.getProductTypeDetails(req, function (responsecode, responsemsg, responsedata) {
        middleware.sendresponse(req, res, 200, responsecode, responsemsg, responsedata);
    });
   });

 //api for single product by id
router.post("/singleproduct", function (req, res) {
    console.log("1111111")
        var rules = {
            id: 'required',
           
        }
         
        const messages = {
            'required': req.language.required,
        }
      
        var request = JSON.parse(req.body)
    
        // checks all validation rules defined above and if error send back response
        if (middleware.checkValidationRules(request, res, rules, messages, {})) {
            admin_model.singleProduct(request, function (responsecode, responsemsg, responsedata) {
                middleware.sendresponse(req, res, 200, responsecode, responsemsg, responsedata);
            });
        }
    
    });

//api for logout
router.post("/logout", function (req, res) {
    var request = JSON.parse(req.body)
    var updusers = {
        is_online: "0"
    };
    admin_model.updateAdmin(request, updusers, function (userprofile, error) {
        if (userprofile != null) {
            var deviceparam = {
                token: "",
               
            };
            common.updateAdminDeviceInfo(request, deviceparam, function (respond) {
                middleware.sendresponse(req, res, 200, '1', {
                    keyword: 'rest_keywords_userlogout_success',
                    components: {}
                }, null);
            });
        } else {
            middleware.sendresponse(req, res, 200, '0', {
                keyword: 'rest_keywords_something_went_wrong',
                components: {}
            }, null);
        }
    });
    });

//get productDetails api
router.post("/getProductDetails", function (req, res) {
    middleware.decryption(req, function (request) {

        var rules = {
            product_id: 'required'

        }

        const messages = {
            'required': req.language.required,

        }

        // checks all validation rules defined above and if error send back response

        if (middleware.checkValidationRules(request, res, rules, messages, {})) {
            auth_model.getProductDetails(request, function (responsecode, responsemsg, responsedata) {
                middleware.sendresponse(req, res, 200, responsecode, responsemsg, responsedata);
            });
        }
    });

    });


module.exports = router;



// validateHeaderToken: async function (req, res, callback) {
       
//     var path_data = req.path.split("/");
//     console.log('=====')
//     console.log(req.path);
//     console.log('=====')
//     // process.exit();
//     console.log(path_data[3])
//     if (bypassMethod.indexOf(path_data[4]) === -1) {
//         if (req.headers['token'] && req.headers['token'] != '') {
//             //var headtoken = cryptoLib.decrypt(req.headers['token'], shaKey, GLOBALS.IV).replace(/\s/g, '');
//             var headtoken = crypto.AES.decrypt(req.headers['token'], ENC_KEY, {iv: ENC_IV}).toString(crypto.enc.Utf8).replace(/\s/g, '');
//             if (headtoken !== '') {
//                 if(path_data[3] == 'admin'){
//                     var adminData = await adminDevices.findAll({
//                         where: {
//                             token: headtoken,
//                         },
//                     });
//                     if (adminData.length > 0) {
//                         req.user_id = adminData[0].user_id;
//                         callback();
//                     } else {
//                         headerValidator.sendresponse(req, res, 401, '-1', {keyword: 'text_rest_invalid_token',components: {}}, null);
//                     }
//                 }else{
//                     var userData = await customerDeviceDB.findAll({
//                         where: {
//                             token: headtoken,
//                         },
//                     });
//                     if (userData.length > 0) {
//                         req.user_id = userData[0].user_id;
//                         callback();
//                     } else {
//                         headerValidator.sendresponse(req, res, 401, '-1', {keyword: 'text_rest_invalid_token',components: {}}, null);
//                     }
//                 }
//             } else {
                
//                 headerValidator.sendresponse(req, res, 401, '-1', {keyword: 'text_rest_invalid_token',components: {}}, null);
//             }
//         } else {
            
//             headerValidator.sendresponse(req, res, 401, '-1', {keyword: 'text_rest_invalid_token',components: {}}, null);
//         }
//     } else {
//         if (req.headers['token'] && req.headers['token'] != '') {
//             //var headtoken = cryptoLib.decrypt(req.headers['token'], shaKey, GLOBALS.IV).replace(/\s/g, '');
//             var headtoken = crypto.AES.decrypt(req.headers['token'], ENC_KEY, {iv: ENC_IV}).toString(crypto.enc.Utf8).replace(/\s/g, '');
//             if (headtoken !== '') {
//                 const userData = await customerDeviceDB.findAll({
//                     where: {
//                         token: headtoken,
//                     },
//                 });
//                 if (userData.length > 0) {
//                     req.user_id = userData[0].user_id;
//                     callback();
//                 } else {
//                     callback();
//                 }
//             } else {
//                 callback();
//             }
//         } else {
//             callback();
//         }
//     }
// }