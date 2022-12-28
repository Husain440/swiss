var con = require("../../../config/database");
var common = require("../../../config/common");
var cryptoLib = require("cryptlib");
var shaKey = cryptoLib.getHashSha256(process.env.KEY, 32);
var emailTemplate = require("../../../config/template");
var asyncLoop = require('node-async-loop');
var Auth = {

  //function for signup 
  signupUser: function (request, callback) {
    // console.log("2")
    Auth.checkUniqueFields(request, function (uniquecode, uniquemsg, isUnique) {
      console.log("3",isUnique)
      if (isUnique) {
        var user = {
          name:(request.name != undefined) ? request.name : "",
          email: request.email,
          phone_no: request.phone_no,
          password: request.password,
          address:(request.address != undefined) ? request.address : "",
          country:(request.country != undefined) ? request.country : "",
          city:(request.city != undefined) ? request.city : "",
          profile_image:(request.profile_image != undefined) ? request.profile_image : "",
          is_online: "1",
          last_login: require('node-datetime').create().format('Y-m-d H:M:S'),
        };

        con.query("INSERT INTO tbl_user SET ?", user, function (err, result) {
          console.log("4",err)
          if (!err && result != undefined) {
            request.user_id = result.insertId;
            common.checkUpdateDeviceInfo(request, function () {
              Auth.userdetails(request, function (userprofile) {
                common.generateSessionCode(request, function (Token) {
                  userprofile.token = Token;
                  callback("1", { keyword: "text_user_signup_success", components: {}, }, userprofile);
                }
                );
              });
            });
          }
          else {

            callback("0", { keyword: "text_user_signup_failed", components: {} }, null);
          }
        });
      }
      else {
        callback(uniquecode, uniquemsg, null);
      }
    }
    );
  },

  //function for check unique fields 
  checkUniqueFields: function (request, callback) {

    // Check in database for this email register
    Auth.checkUniqueEmail(request, function (emailcode, emailmsg, emailUnique) {
      if (emailUnique) {
        Auth.checkUniquePhoneno(request, function (phonecode, phonemsg, phoneUnique) {
          if (phoneUnique) {
            callback(phonecode, phonemsg, phoneUnique);
          } else {
            callback(phonecode, phonemsg, phoneUnique);
          }
        });
      }
      else {
        callback(emailcode, emailmsg, emailUnique);
      }
    });
  },

  //function for check unique email id
  checkUniqueEmail: function (request, callback) {
    
      var uniqueEmail = "SELECT * FROM tbl_user WHERE email = '" + request.email + "' AND is_deleted='0' AND is_active='1' ";
      con.query(uniqueEmail, function (error, result, fields) {
        if (!error && result[0] != undefined) {
          callback('0', { keyword: 'text_user_duplicate_email', components: {} }, false);
        } else {
          callback('1', "Success", true);
        }
      });
    
   
  },

  //function for check unique phone_no
  checkUniquePhoneno: function (request, callback) {
   
      var uniquePhoneno = "SELECT * FROM tbl_user WHERE phone_no = '" + request.phone_no + "' AND is_deleted='0' AND is_active='1' ";
      con.query(uniquePhoneno, function (error, result) {
        if (!error && result[0] != undefined) {
          callback("0", { keyword: "text_user_duplicate_phone_no", components: {}, }, false);
        }
        else {
          callback("1", "Success", true);
        }
      });
   
  },

  //function for logout
  logout: function (request, callback) {

    var updusers = {
      is_online: "0",
    };
    Auth.updateuser(request, updusers, function (userprofile) {
      if (userprofile != null) {
        var deviceparam = {
          token: "",
          device_token: "",
        };
        common.updateDeviceInfo(request, deviceparam, function () {
          callback("1", { keyword: "text_user_logout_success", components: {}, }, null);
        });
      }
      else {
        callback("0", { keyword: "text_something_went_wrong", components: {}, }, null);
      }
    });
  },

  //function for combine userdetail and devicedetails
  userdetails: function (request, callback) {
    var sql = "SELECT u.*,IFNULL(ut.device_token,'') as device_token,IFNULL(ut.device_type,'') as device_type,IFNULL(ut.token,'') as token FROM tbl_user u LEFT JOIN tbl_user_device as ut ON u.id = ut.user_id WHERE u.id = '" + request.user_id + "' AND u.is_active='1' AND u.is_deleted='0' GROUP BY u.id order by u.id desc"
   
    con.query(sql, function (err, result) {
    
      if (!err && result.length > 0) {
        callback(result[0]);
      } else {
        callback(null);
      }
    }
    );
  },

   //editProfile
   editProfile: function (request, callback) {
    console.log("121212")
    Auth.userdetails(request, function (userprofile) {
        if (userprofile != null) {
            var updparams = {
                name: request.name,
                email:request.email,
                phone_no:request.phone_no, 
                address:request.address, 
                country:request.country,
                city:request.city, 
                profile_image:request.profile_image                   
            };
            Auth.updateuser(request, updparams, function (userprofile) {
                if (userprofile == null) {
                    callback('0', {
                        keyword: 'rest_keywords_something_went_wrong',
                        components: {}
                    }, null);
                } else {
                    callback('1', {
                        keyword: 'rest_keywords_profileupdate_success',
                        components: {}
                    }, userprofile);
                }
            });

        } else {
            callback('0', {
                keyword: 'rest_keywords_userdetailsnot_found',
                components: {}
            }, null);
        }
    });
},

  //function for update user details
  updateuser: function (request, upd_params, callback) {
    con.query("UPDATE tbl_user SET ? WHERE id = ? ", [upd_params, request.user_id],
      function (err) {
        if (!err) {
          Auth.userdetails(request, function (response) {
            callback(response);
          });
        } else {
          callback(null, err);
        }
      }
    );
  },

   //userdetails
   userdetail:function(req,callback){
        
    Auth.userdetails(req, function (userprofile, err) {
       
        if(userprofile != null){
            callback('1', { keyword: 'rest_keywords_get_product_detail_success', components: {}}, userprofile); 
        }else{
            callback('0', {  keyword: 'rest_keywords_get_product_detail_failed',   components: {}}, null);
        }
                                   
         
    
})
},

  //function for check login details
  checkLogin: function (request, callback) {

   
      var whereCondition = "email='" + request.email + "' ";
    
    con.query("SELECT * FROM tbl_user where " + whereCondition + " AND  is_active='1' AND is_deleted='0' ", function (err, result) {

      if (!err && result[0] != undefined) {
        var password = result[0].password;
        if (password !== request.password) {
          callback('0', { keyword: 'text_user_invalid_password', components: {} }, null);
        }
        else {
          var upd_params = {
            is_online: "1",
            last_login: require('node-datetime').create().format('Y-m-d H:M:S'),
          }
          // update device information of user
          request.user_id = result[0].id
          common.checkUpdateDeviceInfo(request, function () {
            Auth.updateuser(request, upd_params, function (userprofile, error) {
              common.generateSessionCode(request, function (Token) {
                userprofile.token = Token;
                callback('1', { keyword: 'text_user_login_success', components: {} }, userprofile);
              });
            });
          });
        }
      }
      else {
        callback('0', { keyword: 'text_invalid_login_details', components: {} }, null);
      }
    });
  },

  //function for forgetpassword
  forgotPassword: function (request, callback) {
    if (request.phone_no != undefined && request.phone_no != '') {
      var whereCondition = "phone_no = '" + request.phone_no + "' ";
    }
    else {
      var whereCondition = "email='" + request.email + "' ";
    }
    var sql = "SELECT * FROM tbl_user where " + whereCondition + " AND is_active = '1' AND is_deleted = '0' "
    con.query(sql, function (err, result) {
      if (!err & result[0] != undefined) {
        if (request.email != undefined && request.email != '') {
          var upd_params = {
            forgotpassword_token: process.env.APP_NAME + result[0].id,
            forgotpassword_date: require("node-datetime").create().format("Y-m-d H:M:S"),
          };
          request.user_id = result[0].id
          Auth.updateuser(request, upd_params, function () {
            //key that open page for change password page
            result[0].encoded_user_id = Buffer.from(result[0].id.toString()).toString("base64");
            emailTemplate.forgot_password(result[0], function (forgotTemplate) {
              common.send_email("Forgot Password", request.email, forgotTemplate, function (isSend) {
                if (isSend) {
                  callback("1", { keyword: "text_user_forgot_password_success", components: {}, }, result[0]);
                }
                else {
                  callback("0", { keyword: "text_user_forgot_password_failed", components: {}, }, null);
                }
              }
              );
            });
          });
        }
        else {
          if (request.phone_no != undefined && request.phone_no != '') {
            if (!err & result[0] != undefined) {
              callback("1", { keyword: "text_user_forgot_password_success", components: {}, }, result[0]);
            }
            else {
              callback("0", { keyword: "text_user_forgot_password_failed", components: {}, }, null);
            }
          }
        }
      }
      else {
        callback("0", { keyword: "text_user_doesnot_exist", components: {}, }, null);
      }
    });
  },


  //changepassword
  changePassword: function ( request, callback) {
    Auth.userdetails(request, function (userprofile) {
    
        if (userprofile != null) {
            // var currentpassword = cryptoLib.decrypt(userprofile.password, shaKey, process.env.IV);
            if (userprofile.password != request.old_password) {
                callback('0', {
                    keyword: 'rest_keywords_user_old_password_incorrect',
                    components: {}
                }, null);
            } else if (userprofile.password == request.new_password) {
                callback('0', {
                    keyword: 'rest_keywords_user_newold_password_similar',
                    components: {}
                }, null);
            } else {
                // var password = cryptoLib.encrypt(request.new_password, shaKey, process.env.IV);
                var updparams = {
                    password: request.new_password
                };
                Auth.updateuser(request, updparams, function (userprofile) {
                    if (userprofile == null) {
                        callback('0', {
                            keyword: 'rest_keywords_something_went_wrong',
                            components: {}
                        }, null);
                    } else {
                        callback('1', {
                            keyword: 'rest_keywords_user_change_password_success',
                            components: {}
                        }, userprofile);
                    }
                });
            }
        } else {
           
            callback('0', {
                keyword: 'rest_keywords_userdetailsnot_found',
                components: {}
            }, null);
        }
    });
},
   //function for get auction details
   auctionlist: function (request, callback) {
    sql = "select * from tbl_auction where is_active='1' AND is_deleted='0' order by id desc"
    con.query(sql, function (err, result) {
      if (!err && result != undefined) {
        callback("1", { keyword: "text_user_get_Category_success", components: {}, }, result);
      }
      else {
        callback("0", { keyword: "text_user_get_Category_fail", components: {}, }, null);
      }
    });
  },

  //function for get auction details
  auctionDetails: function (request, callback) {
    sql = "select * from tbl_auction where is_active='1' AND is_deleted='0' AND id = "+request.auction_id+""
    con.query(sql, function (err, result) {
      if (!err && result != undefined) {
        Auth.auctionWiseProduct(request,function(productprofile){
          result[0].products = productprofile
          Auth.getProductType(request,function(typeproduct){
            result[0].producttype = typeproduct
              Auth.getBrandDetails(request, function(detailsbrand){
                result[0].branddetail = detailsbrand
                 Auth.getBarndYear(request,function(detailsyear){
                  result[0].brandyear = detailsyear
                  callback("1", { keyword: "text_user_get_Category_success", components: {}, }, result);
                 })           
              })
            
          })
         
        })
        
      }
      else {
        callback("0", { keyword: "text_user_get_Category_fail", components: {}, }, null);
      }
    });
  },

   //function for get product list by auction id 
   auctionWiseProduct: function (request, callback) {
    sql = "select * from tbl_product where is_active='1' AND is_deleted='0' AND auction_id = "+request.auction_id+""
    con.query(sql, function (err, result) {
      if (!err && result != undefined) {
        
        callback(result);
      }
      else {
        callback("0", { keyword: "text_user_get_Category_fail", components: {}, }, null);
      }
    });
  },

  //function for get product type
  getProductType: function (request, callback) {
    sql = "select * from tbl_product_type where is_active='1' AND is_deleted='0' order by id desc"
    con.query(sql, function (err, result) {
      if (!err && result != undefined) {
        callback(result);
      }
      else {
        callback("0", { keyword: "text_user_get_Product_Type_fail", components: {}, }, null);
      }
    });
  },

   //function for get Barnd model(year)
   getBarndYear: function (request, callback) {
    sql = "select * from tbl_model where is_active='1' AND is_deleted='0' order by id desc"
    con.query(sql, function (err, result) {
      if (!err && result != undefined) {
        callback(result);
      }
      else {
        callback("0", { keyword: "text_user_get_Product_Type_fail", components: {}, }, null);
      }
    });
  },

   //function for get Barnd details
   getBrandDetails: function (request, callback) {
    sql = "select * from tbl_brand where is_active='1' AND is_deleted='0' order by id desc"
    con.query(sql, function (err, result) {
      if (!err && result != undefined) {
        callback(result);
      }
      else {
        callback("0", { keyword: "text_user_get_Brand_Details_fail", components: {}, }, null);
      }
    });
  },

    //function for get bids details
    bidsdetails: function (request, callback) {
      
      sql = "SELECT b.user_bid,p.image,p.name,a.auction_city from tbl_bid b JOIN tbl_product p ON p.id = b.product_id JOIN tbl_auction a ON a.id = p.auction_id where b.user_id = "+request.user_id+""
      con.query(sql, function (err, result) {
        console.log("555",result)
        if (!err && result != undefined) {
          callback("1", { keyword: "text_user_get_Category_success", components: {}, }, result);
        }
        else {
          callback("0", { keyword: "text_user_get_Category_fail", components: {}, }, null);
        }
      });
    },

  //function for get category
  getCategory: function (request, callback) {
    sql = "select * from tbl_category where is_active='1' AND is_deleted='0' order by id desc"
    con.query(sql, function (err, result) {
      if (!err && result != undefined) {
        callback("1", { keyword: "text_user_get_Category_success", components: {}, }, result);
      }
      else {
        callback("0", { keyword: "text_user_get_Category_fail", components: {}, }, null);
      }
    });
  },

  //function for get subcategory
  getSubCategory: function (request, callback) {
    var sql = "select * from tbl_subcategory where category_id ='" + request.category_id + "' AND is_active=1 AND is_deleted = 0 order by id desc";
    con.query(sql, function (err, result) {
      if (!err && result != undefined) {
        callback("1", { keyword: "text_user_get_sub_category_success", components: {}, }, result);
      }
      else {
        callback("0", { keyword: "text_user_get_sub_category_fail", components: {}, }, null);
      }
    })
  },


  //function for get  productList
  getProductList: function (request, callback) {
    var sql = "select * from tbl_product where category_id = " + request.category_id + " AND sub_category_id = " + request.subcategory_id + " AND is_active = '1' AND is_deleted='0' order by id desc";
    con.query(sql, function (err, result) {
      if (!err && result != undefined) {
        asyncLoop(result, function (item, next) {
          Auth.getSingleImage(item.id, function (data) {
            item.image = data;
            next();
          });
        }, function () {
          callback('1', { keyword: 'txt_user_get_productlist_success', components: {} }, result);
        });
      }
      else {
        callback("0", { keyword: "text_user_get_productlist_fail", components: {}, }, null);
      }
    })
  },

  //function for get product details
  getProductDetails: function (request, callback) {
    var sql = "select * from tbl_product where id ='" + request.product_id + "' AND is_active='1' AND is_deleted='0' ";
    con.query(sql, function (err, result) {
      if (!err && result != undefined) {
        Auth.getMultipleImage(request, function (image) {
          result[0].image = image;
          Auth.getColor(request, function (color) {
            result[0].color = color;
            callback("1", { keyword: "text_user_get_product_details_success", components: {}, }, result);
          });
        });
      }
      else {
        callback("0", { keyword: "text_user_get_product_details_fail", components: {}, }, null);
      }
    });
  },

  //function for get color
  getColor: function (request, callback) {
    var sql = "select * from tbl_color where product_id = " + request.product_id + " AND is_active = '1' AND is_deleted='0' order by id desc";
    con.query(sql, function (err, result) {
      if (!err && result != undefined) {
        callback(result)
      }
      else {
        callback(null);
      }
    });
  },
  //function for get single image from multiple images
  getSingleImage: function (id, callback) {
    var sql = "select * from tbl_image where product_id = " + id + " and is_active = '1' and  is_deleted='0' order by id desc LIMIT 1";
    con.query(sql, function (err, result) {
      if (!err && result != undefined) {
        callback(result[0])
      }
      else {
        callback(null);
      }
    })
  },

  //function for get multiple image
  getMultipleImage: function (request, callback) {
    var sql = "select * from tbl_image where product_id =" + request.product_id + " AND is_active = '1' AND is_deleted='0' order by id desc";
    con.query(sql, function (err, result) {
      if (!err && result != undefined) {
        callback(result);
      }
      else {
        callback(null);
      }
    })
  },

  //function for send otp
  sendOtp: function (request, callback) {
    if (request.phone_no != undefined && request.phone_no != '') {
      var whereCondition = "phone_no = '" + request.phone_no + "' ";
    }
    else {
      var whereCondition = "email='" + request.email + "' ";
    }
    var OTP = Math.floor(1000 + Math.random() * 9000);
    request.OTP = OTP;
    sql = "SELECT * FROM tbl_user_verification where " + whereCondition;
    con.query(sql, function (err, result) {
      if (!err && result != undefined) {
        Auth.updateOtp(request, function (code, message, result) {
          callback(code, message, result);
        })
      }
      else {
        Auth.insertOtp(request, function (code, message, result) {
          callback(code, message, result);
        })
      }
    });
  },

  //function for update otp
  updateOtp: function (request, callback) {
    if (request.phone_no != undefined && request.phone_no != '') {
      var whereCondition = "phone_no = '" + request.phone_no + "' ";
    }
    else {
      var whereCondition = "email='" + request.email + "' ";
    }

    con.query("UPDATE tbl_user_verification SET ? where " + whereCondition, { otp: request.OTP }, function (err, result, fields) {
      if (!err && result != undefined) {
        Auth.getOtp(request, function (result) {
          if (result != null) {
            if (request.phone_no != undefined && request.phone_no != '') {
              callback('1', { keyword: 'text_user_otp_resend_succ', components: {} }, result);
            }
            else {
              emailTemplate.sendOtp(result[0], function (sendotpTemplate) {
                common.send_email("sendotp", request.email, sendotpTemplate, function (isSend) {
                  if (isSend) {
                    callback("1", { keyword: "text_user_otp_mail_send_success", components: {}, }, result);
                  }
                  else {
                    callback("0", { keyword: "text_user_otp_mail_send_fail", components: {}, }, null);
                  }
                });
              });
              callback('1', { keyword: 'text_user_otp_resend_succ', components: {} }, result);
            }
          }
          else {
            callback('0', { keyword: 'text_user_otp_resend_fail', components: {} }, null);
          }
        })
      }
      else {
        callback('0', { keyword: 'text_user_not_exist', components: {} }, null);
      }
    })
  },

  //function for insert otp
  insertOtp(request, callback) {
    var params = {
      phone_no: (request.phone_no != undefined && request.phone_no != "") ? request.phone_no : "",
      email: (request.email != undefined && request.email != "") ? request.email : "",
      otp: request.OTP
    }
    con.query('INSERT tbl_user_verification SET ? ', params, function (err, result, fields) {
      if (!err && result != undefined) {
        Auth.getOtp(request, function (result) {
          if (result != null) {
            if (request.phone_no != undefined && request.phone_no != '') {
              callback('1', { keyword: 'text_user_otp_send_succ', components: {} }, result);
            }
            else {
              emailTemplate.sendOtp(result[0], function (sendotpTemplate) {
                common.send_email("sendotp", request.email, sendotpTemplate, function (isSend) {
                  if (isSend) {
                    callback("1", { keyword: "text_user_otp_mail_send_success", components: {}, }, result);
                  }
                  else {
                    callback("0", { keyword: "text_user_otp_mail_send_fail", components: {}, }, null);
                  }
                });
              });
              callback('1', { keyword: 'text_user_otp_send_succ', components: {} }, result);
            }
          }
          else {
            callback('0', { keyword: 'text_user_otp_send_fail', components: {} }, null);
          }
        })
      }
      else {
        callback('0', { keyword: 'text_user_not_exist_fail', components: {} }, null);
      }
    })
  },

  //function for get otp
  getOtp: function (request, callback) {
    if (request.phone_no != undefined && request.phone_no != '') {
      var whereCondition = "phone_no = '" + request.phone_no + "' ";
    }
    else {
      var whereCondition = "email='" + request.email + "' ";
    }
    var sql = "select * from tbl_user_verification where " + whereCondition;
    con.query(sql, function (err, result) {
      if(!err && result != undefined){
       callback(result)
      }
      else{
        callback(null)
      }
    })
  },

  //function for verify otp
  verifyOtp: function (request, callback) {
    if (request.phone_no != undefined && request.phone_no != '') {
      var whereCondition = "phone_no = '" + request.phone_no + "' ";
    }
    else {
      var whereCondition = "email='" + request.email + "' ";
    }
    var sql = "SELECT * FROM tbl_user_verification where " + whereCondition + " AND otp = " + request.otp;
    con.query(sql, function (err, result) {
      if (!err && result[0] != undefined) {
        Auth.deleteOtp(result[0], function (result) {
          if (result != null) {
            callback('1', { keyword: 'text_user_otp_verify_succ', components: {} }, result);
          }
          else {
            callback('0', { keyword: 'text_user_otp_verify_fail', components: {} }, null);
          }
        })
      }
      else {
        callback('0', { keyword: 'text_user_does_not_exist', components: {} }, null);
      }
    });

  },

  //function for delete otp
  deleteOtp: function (request, callback) {
    con.query("DELETE FROM tbl_user_verification WHERE id = '" + request.id + "' ", function (err, result) {
      if (!err && result != undefined) {
        callback(result);
      }
      else {
        callback(null);
      }

    })
  },

}

module.exports = Auth;
