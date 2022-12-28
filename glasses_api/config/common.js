var con = require('./database');

var Validate={

    //Function to generate the random hash for token
    generateSessionCode: function (request, callback) {
        
        var randtoken = require('rand-token').generator();
        var usersession = randtoken.generate(64, "0123456789abcdefghijklnmopqrstuvwxyz");
        
        Validate.checkDeviceInfo(request, function (DeviceInfo) {
            if (DeviceInfo != null) {
                var params = {
                    token: usersession
                };
                Validate.updateDeviceInfo(request,params, function () {
                    callback(usersession);
                });
            } else {
                var params = {
                    token: usersession,
                    user_id: request.user_id,
                };
                Validate.addDeviceInformation(params, function () {
                    callback(usersession);
                });
            }
        });
    },

    //Function to check device information of any users
     checkDeviceInfo: function (request, callback) {
       var sql ="SELECT * FROM tbl_user_device WHERE user_id = '" + request.user_id + "' "
        con.query(sql, function (err, result) {

            if (!err && result != undefined) {
                callback(result[0]);
            } else {
                callback(null,err);
            }
        });
    },
 

    //Function to check and update device information
    checkUpdateDeviceInfo: function (request, callback) {
        var upd_device = {
            token:(request.token != undefined) ? request.token : "",
            uuid: (request.uuid != undefined) ? request.uuid : "",
            ip: (request.ip != undefined) ? request.ip : "",
            os_version: (request.os_version != undefined) ? request.os_version : "",
            model_name: (request.model_name != undefined) ? request.model_name : "",
            device_name:(request.device_name != undefined) ? request.device_name : "",
            device_type: (request.device_type != undefined) ? request.device_type : "",
            device_token: (request.device_token != undefined) ? request.device_token : "",
        };

       Validate.checkDeviceInfo(request, function (DeviceInfo) {
            if (DeviceInfo != undefined) {
                Validate.updateDeviceInfo(request, upd_device, function (result) {
                    callback(result);
                });
            } else {
                upd_device.user_id = request.user_id;
                console.log("2589648555555",upd_device)
                Validate.addDeviceInformation(upd_device, function (result) {
                    callback(result);
                });
            }
        });
    },


    //Function to update device information of any users
    updateDeviceInfo: function (request, params, callback) {
        con.query("UPDATE tbl_user_device SET ? WHERE user_id = '" + request.user_id + "'  ", params, function (err,result) {
            callback(result);
        });
    },


    //Add Device Information for users
    addDeviceInformation: function (user, callback) {
     con.query('INSERT INTO tbl_user_device SET ?',user, function (err, result,fields) {
     callback(result);
    });
    },

    //Function to generate the random hash for token for admin
    generateAdminSessionCode: function (request, callback) {
        var randtoken = require('rand-token').generator();
        var usersession = randtoken.generate(64, "0123456789abcdefghijklnmopqrstuvwxyz");
        
        Validate.checkAdminDeviceInfo(request, function (DeviceInfo, Error) {
            if (DeviceInfo != null) {
                
                var params = {
                    token: usersession
                };
                Validate.updateAdminDeviceInfo(request, params, function () {
                    callback(usersession);
                });
            } else {
               
                var params = {
                    token: usersession,
                    admin_id: request.admin_id,
                };
                Validate.addAdminDeviceInformation(params, function () {
                    callback(usersession);
                });
            }
        });
    },

    //Function to check device information of any admin
    checkAdminDeviceInfo: function (request, callback) {
         
        con.query("SELECT * FROM  tbl_admin_device WHERE admin_id = '" + request.admin_id + "'  ", function (err, result) {
            if (!err && result[0] != undefined) {
                
                callback(result[0]);
            } else {
                callback(null, err);
            }
        });
    },
   
    //Function to update device information of any admin
    updateAdminDeviceInfo: function (request, params, callback) {
        con.query("UPDATE  tbl_admin_device SET ? WHERE admin_id = '" + request.admin_id + "'  ", params, function (err, result, fields) {
            callback(result);
        });
    },
   
    //Add Device Information for admin
    addAdminDeviceInformation: function (admin, callback) {
        // console.log("---",admin)
        con.query('INSERT INTO  tbl_admin_device SET ?', admin, function (err, result, fields) {
           // console.log("333",err)
            callback(result);
        });
    },
   
    //Function to check and update device information of admin
    checkAdminUpdateDeviceInfo: function (request, callback) {
      
        var upd_device = {
            token:(request.token != undefined) ? request.token : "",
            uuid: (request.uuid != undefined) ? request.uuid : "",
            ip: (request.ip != undefined) ? request.ip : "",
            os_version: (request.os_version != undefined) ? request.os_version : "",
            model_name: (request.model_name != undefined) ? request.model_name : "",
            device_name:(request.device_name != undefined) ? request.device_name : "",
            device_type: (request.device_type != undefined) ? request.device_type : "",
            device_token: (request.device_token != undefined) ? request.device_token : "",
        };
             //console.log("111")
        Validate.checkAdminDeviceInfo(request, function (DeviceInfo) {
             //console.log("254",DeviceInfo)
            if (DeviceInfo != undefined) {
                Validate.updateAdminDeviceInfo(request, upd_device, function (result, error) {
                    callback(result);
                });
            } else {
                //console.log("457")
                upd_device.admin_id = request.admin_id;
                Validate.addAdminDeviceInformation(upd_device, function (result, error) {
                    callback(result);
                });
            }
        });
    },

     //Function to check and update device information of admin
     checkProductImageUpdateInfo: function (request, callback) {
      
        var upd_device = {
            image:(request.image != undefined) ? request.image : "",
            
        };
             //console.log("111")
        Validate.checkProductImageInfo(request, function (DeviceInfo) {
             //console.log("254",DeviceInfo)
            if (DeviceInfo != undefined) {
                Validate.updateProductImageInfo(request, upd_device, function (result, error) {
                    callback(result);
                });
            } else {
                //console.log("457")
                upd_device.product_id = request.product_id;
                Validate.addProductImageInformation(upd_device, function (result, error) {
                    callback(result);
                });
            }
        });
    },

    //Function to check product image
    checkProductImageInfo: function (request, callback) {
         
        con.query("SELECT * FROM  tbl_image WHERE product_id = '" + request.product_id + "' and image = '" + request.image + "'  ", function (err, result) {
            if (!err && result[0] != undefined) {
                console.log("254789",result[0])
                callback(result[0]);
            } else {
                callback(null, err);
            }
        });
    },

    //Function to update product image
    updateProductImageInfo: function (request, params, callback) {
        con.query("UPDATE  tbl_image SET ? WHERE product_id = '" + request.product_id + "'  ", params, function (err, result, fields) {
            callback(result);
        });
    },

     //Add product image
     addProductImageInformation: function (admin, callback) {
        // console.log("---",admin)
        con.query('INSERT INTO  tbl_image SET ?', admin, function (err, result, fields) {
           // console.log("333",err)
            callback(result);
        });
    },

    send_email: function (subject, to_email, message, callback) {
        
        var transporter = require('nodemailer').createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_ID,
                pass: process.env.EMAIL_PASSWORD
            }
        });
        var mailOptions = {
            from: process.env.EMAIL_ID,
            to: to_email,
            subject: subject,
            html: message
        };
        transporter.sendMail(mailOptions, (error) => {
            
            if (error) {
                callback(false);
            } else {
                callback(true);
            }
        });
    },    
}
module.exports = Validate;
