var con = require('../../../config/database');
var common = require('../../../config/common');
var cryptoLib = require('cryptlib');
var asyncLoop = require('node-async-loop');
var moment = require('moment');
var shaKey = cryptoLib.getHashSha256(process.env.KEY, 32);
var emailTemplate = require('../../../config/template');
const { checkLogin } = require('../Auth/auth_model');

var Auth = {

    //function for  admin details
    Admindetails: function (request, callback) {
        con.query("SELECT u.*,IFNULL(ut.device_token,'') as device_token,IFNULL(ut.device_type,'') as device_type,IFNULL(ut.token,'') as token FROM tbl_admin_details u LEFT JOIN tbl_admin_device as ut ON u.id = ut.admin_id WHERE u.id = '" + request.admin_id + "' GROUP BY u.id", function (err, result, fields) {             
            if (!err && result.length > 0) {
                callback(result[0]);
            } else {
                callback(null);
            }
        });
    },

    //function for  signup
    signUpUsers: function (request, callback) {
       
        Auth.checkUniqueEmail(request, function (uniquecode, uniquemsg, isUnique) {

            if (isUnique) {
             
                var admin = {
                    full_name:request.full_name,
                    email: request.email,
                    password: request.password,
                    last_login: require('node-datetime').create().format('Y-m-d H:M:S'),
                    is_online: '1'                   
                };
                con.query('INSERT INTO tbl_admin_details SET ?', admin, function (err, result, fields) {
                  
                    if (!err && result != undefined) {
                        request.admin_id = result.insertId;
                         common.checkAdminUpdateDeviceInfo(request, function () {
                            Auth.Admindetails(request, function (userprofile, err) {
                                 common.generateAdminSessionCode(request, function (Token) {  
                                    userprofile.token = Token;                             
                                    callback('1', {
                                        keyword: 'rest_keywords_user_signup_success',
                                        components: {}
                                    }, userprofile);
                                 });
                            });
                         });
                    } else {
                       
                        callback('0', {
                            keyword: 'rest_keywords_user_signup_failed',
                            components: {}
                        }, null);
                    }
                });

            } else {
                callback(uniquecode, uniquemsg, null);
            }
        });
    },

    //function for check unique email id
    checkUniqueEmail: function (request, callback) {
    
    var uniqueEmail = "SELECT * FROM tbl_admin_details WHERE email = '" + request.email + "'  AND is_active='1' ";
    con.query(uniqueEmail, function (error, result, fields) {
      if (!error && result[0] != undefined) {
        callback('0', { keyword: 'text_user_duplicate_email', components: {} }, false);
      } else {
        callback('1', "Success", true);
      }
    });
   
    },

    //function for check login details
    checkLogin: function (request, callback) {

   
    var whereCondition = "email='" + request.email + "' ";
  
    con.query("SELECT * FROM tbl_admin_details where " + whereCondition + " AND  is_active='1'  ", function (err, result) {
   console.log("RRRR",result)
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
        request.admin_id = result[0].id
        common.checkAdminDeviceInfo(request, function () {
          Auth.updateAdmin(request, upd_params, function (userprofile, error) {
            common.generateAdminSessionCode(request, function (Token) {
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

    //function for  forgotpassword
    forgotPassword: function (request, callback) {

        con.query("SELECT * FROM tbl_user where email='" + request.email + "' AND is_deleted='0' ", function (err, result, fields) {
            if (!err & result[0] != undefined) {
                 
                var updparams = {
                    forgotpassword_token: process.env.APP_NAME + result[0].id,
                    forgotpassword_date: require('node-datetime').create().format('Y-m-d H:M:S')
                }
                Auth.updateCustomer(result[0].id, updparams, function (isupdated) {

                    result[0].encoded_user_id = Buffer.from(result[0].id.toString()).toString('base64');
                    emailTemplate.forgot_password(result[0], function (forgotTemplate) {
                        common.send_email("Forgot Password", request.email, forgotTemplate, function (isSend) {
                            if (isSend) {
                                callback('1', {
                                    keyword: 'rest_keywords_user_forgot_password_success',
                                    components: {}
                                }, result[0]);
                            } else {
                                callback('0', {
                                    keyword: 'rest_keywords_user_forgot_password_failed',
                                    components: {}
                                }, result[0]);
                            }
                        });
                    });
                });
            } else {
                callback('0', {
                    keyword: 'rest_keywords_user_doesnot_exist',
                    components: {}
                }, null);
            }
        });
    },

     //function for userdetails
    userdetail:function(req,callback){
        
    Auth.userdetails(req, function (userprofile, err) {
       
        if(userprofile != null){
            callback('1', { keyword: 'rest_keywords_get_product_detail_success', components: {}}, userprofile); 
        }else{
            callback('1', {  keyword: 'rest_keywords_get_product_detail_failed',   components: {}}, null);
        }
                                   
         
    
})
    },

    //function for combine userdetail and devicedetails
    userdetails: function (request, callback) {
   
    var sql = "select * from tbl_user where is_deleted = '0'" 
    con.query(sql, function (err, result) {
        
      if (!err && result[0] != undefined) {
        callback(result);
      } else {
        callback(null);
      }
    }
    );
    },

    //functions for delete user
    removeuser: function (request, callback) {

        var params = {
            is_deleted: "1"
        };
        con.query("UPDATE  tbl_user SET ? WHERE id = '" + request.id + "'  ", params, function (err, result, fields) {
            callback('1', { keyword: 'rest_keywords_update_success', components: {}}, result); 
        });
    },

     //function for  add products in admin panel
     addproducts: function (request, callback) {
       
      Auth.checkUniqueProduct(request, function (uniquecode, uniquemsg, isUnique) {

          if (isUnique) {
           
              var prd = {
                  product_type_id:request.product_type_id,
                  brand_id:request.brand_id,
                  auction_id:request.auction_id,
                  name:request.name,
                  price: request.price,
                  description: request.description,
                  launch_year: request.launch_year,                
              };
              con.query('INSERT INTO tbl_product SET ?', prd, function (err, result, fields) {
               
                
                  if (!err && result != undefined) {
                      request.product_id = result.insertId;
                       common.checkProductImageUpdateInfo(request, function () {
                          Auth.getProductDetail(request, function (userprofile, err) {
                                                          
                                  callback('1', {
                                      keyword: 'rest_keywords_user_signup_success',
                                      components: {}
                                  }, userprofile);
                               });
                          });
                       
                  } else {
                     
                      callback('0', {
                          keyword: 'rest_keywords_user_signup_failed',
                          components: {}
                      }, null);
                  }
              });

          } else {
              callback(uniquecode, uniquemsg, null);
          }
      });
    },

    add_product: function (request, callback) {
      var prd = {
        product_type_id:request.product_type_id,
        brand_id:request.brand_id,
        auction_id:request.auction_id,
        name:request.name,
        price: request.price,
        description: request.description,
        launch_year: request.launch_year, 
        is_active:'1'               
    };

      // console.log(place)

      con.query('INSERT INTO tbl_product SET ?', prd, function (err, result, fields) {
          if (!err) {
            request.product_id = result.insertId;
              if (request.images.length != 0) {
                  if (request.product_id != 0) {
                      Auth.addProductImage(request, function () {
                          callback('1', {
                              keyword: 'rest_keywords_location_add_success',
                              components: {}
                          }, null);
                      });
                  }
                  else {
                      callback('0', {
                          keyword: 'rest_keywords_location_add_failed',
                          components: {}
                      }, null);
                  }
              }
              else {
                  callback('0', {
                      keyword: 'rest_keywords_location_add_failed',
                      components: {}
                  }, null);
              }
          }
          else {
              console.log(err)
              callback('0', {
                  keyword: 'rest_keywords_location_add_failed',
                  components: {}
              }, null);
          }
      });
  },

  // Add Multiple Images in tbl_image
  addProductImage: function (request, callback) {

    try {
        var image_array = JSON.parse(request.images);
    } catch (e) {
        var image_array = request.images;
    }

    console.log(image_array)
    var params_ques_ans = [];

    for (var key in image_array) {
        params_ques_ans.push([request.product_id, image_array[key]['image']]);
    }


    var sql = "INSERT INTO tbl_image (`product_id`, `image`) VALUES ?";
    con.query(sql, [params_ques_ans], function (err, result1, fields) {
        callback(true, 1);
    });
},

   //function for check unique product
   checkUniqueProduct: function (request, callback) {
    
    var uniqueProduct = "SELECT * FROM tbl_product WHERE name = '" + request.name + "'  AND is_active='1' ";
    con.query(uniqueProduct, function (error, result, fields) {
      if (!error && result[0] != undefined) {
        callback('0', { keyword: 'text_user_duplicate_product', components: {} }, false);
      } else {
        callback('1', "Success", true);
      }
    });
   
    },

    //function for get product details
    getProductDetail: function (request, callback) {
      var sql = "select * from tbl_product p join tbl_image i on p.id = i.product_id where is_deleted = '0' ";
      con.query(sql, function (err, result) {
       
       if (!err && result.length > 0) {
           callback(result); 
       } else {
           callback(null); 
       }
     }
     );
   },

    //functions for delete user
    removeproduct: function (request, callback) {

        var params = {
            is_deleted: "1"
        };
        con.query("UPDATE  tbl_product SET ? WHERE id = '" + request.id + "'  ", params, function (err, result, fields) {
            callback('1', { keyword: 'rest_keywords_remove_success', components: {}}, result); 
        });
    },

    //function for view single user
    viewuser: function (request, callback) {
   
        var sql = "select * from tbl_user where id = '" + request.id + "' " 
        con.query(sql, function (err, result) {
            
          if (!err && result.length > 0) {
            callback('1', { keyword: 'rest_keywords_single user details_success', components: {}}, result); 
          } else {
            callback(null);
          }
        }
        );
    },

    //function for view single admin
    viewadmin: function (request, callback) {
   
        var sql = "select * from tbl_admin_details where id = '" + request.id + "' " 
        con.query(sql, function (err, result) {
            
          if (!err && result.length > 0) {
            callback('1', { keyword: 'rest_keywords_single user details_success', components: {}}, result); 
          } else {
            callback(null);
          }
        }
        );
    },

    //function for view single user
    activestatus: function (request, callback) {
        console.log("12")
   
        var sql = "select * from tbl_user where id = '" + request.id + "' " 
        con.query(sql, function (err, result) {
            
          if (!err && result.length > 0) {
           
            if(result[0].is_active == "0"){
                
                var params = {
                    is_active: "1"
                };
                con.query("UPDATE  tbl_user SET ? WHERE id = '" + request.id + "'  ", params, function (err, result, fields) {
                    Auth.singleUser(request, function(result){
                        console.log("$",result)
                        callback('1', { keyword: 'rest_keywords_update_success', components: {}}, result); 
                    })
                });
            }else{
               
                var params = {
                    is_active: "0"
                };
                con.query("UPDATE  tbl_user SET ? WHERE id = '" + request.id + "'  ", params, function (err, result, fields) {
                    Auth.singleUser(request, function(result){
                        console.log("#",result)
                        callback('1', { keyword: 'rest_keywords_update_success', components: {}}, result); 
                    })               
                 });
            }
           
          } else {
            console.log("555")
            callback(null);
          }
        }
        );

       
    }, 
    
     //function for get single user details
     singleUser: function (request, callback) {
        var sql = "select * from tbl_user where id = '"+request.id+"' ";
        con.query(sql, function (err, result) {
        
         if (!err && result.length > 0) {
             callback(result); 
         } else {
           callback(null);
         }
       }
       );
},
        
    //function for get product details
    getProductDetails: function (request, callback) {
       var sql = "select * from tbl_product where is_deleted = '0' ";
       con.query(sql, function (err, result) {
        
        if (!err && result.length > 0) {
            callback('1', { keyword: 'rest_keywords_update_success', components: {}}, result); 
        } else {
            callback('1', { keyword: 'rest_keywords_update_success', components: {}}, null); 
        }
      }
      );
    },

    //function for get Brand details
    getBrandDetails: function (request, callback) {
        var sql = "select * from tbl_brand where is_deleted = '0' ";
        con.query(sql, function (err, result) {
         
         if (!err && result.length > 0) {
             callback('1', { keyword: 'rest_keywords_update_success', components: {}}, result); 
         } else {
             callback('1', { keyword: 'rest_keywords_update_success', components: {}}, null); 
         }
       }
       );
     },

     //function for get Auction details
     getAuctionDetails: function (request, callback) {
        var sql = "select * from tbl_auction where is_deleted = '0' ";
        con.query(sql, function (err, result) {
         
         if (!err && result.length > 0) {
             callback('1', { keyword: 'rest_keywords_update_success', components: {}}, result); 
         } else {
             callback('1', { keyword: 'rest_keywords_update_success', components: {}}, null); 
         }
       }
       );
     },

    //function for get Product type details
    getProductTypeDetails: function (request, callback) {
        var sql = "select * from tbl_product_type where is_deleted = '0' ";
        con.query(sql, function (err, result) {
         
         if (!err && result.length > 0) {
             callback('1', { keyword: 'rest_keywords_update_success', components: {}}, result); 
         } else {
             callback('1', { keyword: 'rest_keywords_update_success', components: {}}, null); 
         }
       }
       );
     },

    //function for get single product details
    singleProduct: function (request, callback) {
            var sql = "select * from tbl_product where id = '"+request.id+"' ";
            con.query(sql, function (err, result) {
            
             if (!err && result.length > 0) {
                 callback('1', { keyword: 'rest_keywords_update_success', components: {}}, result); 
             } else {
               callback(null);
             }
           }
           );
    },

    //edit product
    editProfile: function ( request, callback) {
        
        Auth.singleProduct(request, function (responsecode, responsemsg, userprofile) {
           
            if (userprofile != null) {

                var updparams = {
                    name: request.name,
                    price:request.price, 
                    description:request.description,  
                    launch_year:request.launch_year,                   
                };


                Auth.updateProduct(request, updparams, function (responsecode, responsemsg, responsedata) {
                    console.log("hhhhhhh",responsedata)
                    if (responsedata == null) {
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
 
    //function for update admin details
    updateAdmin: function (request, upd_params, callback) {
    con.query("UPDATE tbl_admin_details SET ? WHERE id = ? ", [upd_params, request.admin_id],
      function (err,result) {
        if (!err) {
          Auth.Admindetails(request, function (response) {
            callback(response);
          });
        } else {
          callback(null, err);
        }
      }
    );
    },

    //function for update product details
    updateProduct: function (request, upd_params, callback) {
       
        con.query("UPDATE tbl_product SET ? WHERE id = ? ", [upd_params, request.id], function (err, result, fields) {
           
            if (!err) {
                Auth.singleProduct(request, function (responsecode, responsemsg, responsedata) {
                   
                    callback('1', { keyword: 'rest_keywords_sucess get details', components: {}}, responsedata); 

                });
            } else {
                callback(null, err);
            }
        });
    }, 

}


module.exports = Auth;