var express = require('express');
var middleware = require('../../../middleware/headerValidator');
var common = require('../../../config/common');
var auth_model = require('./auth_model');
const { request } = require('express');
var router = express.Router();


//signup api
router.post("/signup", function (req, res) {


    // middleware.decryption(req, function (request) {

        var rules = {
            name:'',
            email:'required|email',
            phone_no:'required',
            password: 'required',
            address:'required',
            country:'required',
            city:'required',
            profile_image:'',
            device_type: '',
            device_token: '',
            uuid: '',
            os_version: '',
            device_name: '',
            model_name: '',
            ip: '',
        }
        // if (request.phone_no != undefined && request.phone_no != '') {
        //     rules.phone_no = "required"
        // }
        // else {
        //     rules.email = "required"
        // }
        const messages = {
            'required': req.language.required,
            'in': req.language.in,
        }

        var request =  JSON.parse(req.body);
        console.log("1",request)
        // checks all validation rules defined above and if error send back response
        if (middleware.checkValidationRules(request, res, rules, messages, {})) {
            auth_model.signupUser(request, function (responsecode, responsemsg, responsedata) {
                middleware.sendresponse(req, res, 200, responsecode, responsemsg, responsedata);
            });
        }
    // });
});

//login api
router.post("/login", function (req, res) {

    // middleware.decryption(req, function (request) {
        var rules = {
            email:'required|email',
            password: 'required',
            device_type: '',
            device_token: '',
            uuid: '',
            os_version: '',
            device_name: '',
            model_name: '',
            ip: '',
        }
        // if (request.phone_no != undefined && request.phone_no != '') {
        //     rules.phone_no = "required"
        // }
        // else {
        //     rules.email = "required"
        // }
        const messages = {
            'required': req.language.required,
            'in': req.language.in
        }
        var request =  JSON.parse(req.body);
        // checks all validation rules defined above and if error send back response
        if (middleware.checkValidationRules(request, res, rules, messages, {})) {

            auth_model.checkLogin(request, function (responsecode, responsemsg, responsedata) {
                middleware.sendresponse(req, res, 200, responsecode, responsemsg, responsedata);
            });
        }
    // });
});

//logout api
router.post("/logout", function (req, res) {
    // middleware.decryption(req, function (request) {
        request.user_id = req.user_id
        auth_model.logout(request, function (responsecode, responsemsg, responsedata) {
            middleware.sendresponse(req, res, 200, responsecode, responsemsg, responsedata);
        });
    // });
});

//api for userdetails
router.post("/userdetails", function (req, res) {   
   
    auth_model.userdetail(req, function (responsecode, responsemsg, responsedata) {
        middleware.sendresponse(req, res, 200, responsecode, responsemsg, responsedata);
    });
});

//api for editprofile
router.post("/editProfile", function (req, res) {
console.log("1")
    var rules = {
        name:'',
        email: '',
        phone_no: '',
        address:'', 
        country:'',
        city:'',
        profile_image:'' 
    }
    const messages = {
        'required': req.language.required
    }

    var request = JSON.parse(req.body)
        request.user_id = req.user_id

    // checks all validation rules defined above and if error send back response
    if (middleware.checkValidationRules(request, res, rules, messages, {})) {
        auth_model.editProfile(request, function (responsecode, responsemsg, responsedata) {
            middleware.sendresponse(req, res, 200, responsecode, responsemsg, responsedata);
        });
    }
});


//api for changepassword
router.post("/changepassword", function (req, res) {

    // middleware.decryption(req.body, function (request) {

      
        var rules = {
            old_password: 'required',
            new_password: 'required',
        }

        const messages = {
            'required': req.language.required
        }

        var request = JSON.parse(req.body)
        request.user_id = req.user_id
        console.log("555",request)
        // checks all validation rules defined above and if error send back response
        if (middleware.checkValidationRules(request, res, rules, messages, {})) {
            auth_model.changePassword(request, function (responsecode, responsemsg, responsedata) {
                middleware.sendresponse(req, res, 200, responsecode, responsemsg, responsedata);
            });
        }
    // });
});

//get catgory api
router.post("/getauctionlist", function (req, res) {
    auth_model.auctionlist(request, function (responsecode, responsemsg, responsedata) {
        middleware.sendresponse(req, res, 200, responsecode, responsemsg, responsedata);
    });
})

//api for getauctiondetails
router.post("/getauctiondetails", function (req, res) {

    // middleware.decryption(req.body, function (request) {

      
        var rules = {
           auction_id: 'required',
        }

        const messages = {
            'required': req.language.required
        }

        var request = JSON.parse(req.body)
        request.user_id = req.user_id
      
        // checks all validation rules defined above and if error send back response
        if (middleware.checkValidationRules(request, res, rules, messages, {})) {
            auth_model.auctionDetails(request, function (responsecode, responsemsg, responsedata) {
                middleware.sendresponse(req, res, 200, responsecode, responsemsg, responsedata);
            });
        }
    // });
});

//get catgory api
router.post("/getmybids", function (req, res) {
    request.user_id = req.user_id
    auth_model.bidsdetails(request, function (responsecode, responsemsg, responsedata) {
        middleware.sendresponse(req, res, 200, responsecode, responsemsg, responsedata);
    });
})

//forgotPassword api
router.post("/forgotpassword", function (req, res) {
    // middleware.decryption(req, function (request) {
        var request =  JSON.parse(req.body);

        var rules = {}

        if (request.phone_no != undefined && request.phone_no != '') {
            rules.phone_no = "required"
        }
        else {
            rules.email = "required"
        }

        const messages = {
            'required': req.language.required,
            'email': req.language.email,
        }

      

        // checks all validation rules defined above and if error send back response

        if (middleware.checkValidationRules(request, res, rules, messages, {})) {

            auth_model.forgotPassword(request, function (responsecode, responsemsg, responsedata) {
                middleware.sendresponse(req, res, 200, responsecode, responsemsg, responsedata);
            });
        }
    // });
});

//get catgory api
router.get("/getCategory", function (req, res) {
    auth_model.getCategory(request, function (responsecode, responsemsg, responsedata) {
        middleware.sendresponse(req, res, 200, responsecode, responsemsg, responsedata);
    });
})

//get sub category api
router.post("/getSubCategory", function (req, res) {
    middleware.decryption(req, function (request) {

        var rules = {
            category_id: 'required'

        }

        const messages = {
            'required': req.language.required,

        }

        // checks all validation rules defined above and if error send back response

        if (middleware.checkValidationRules(request, res, rules, messages, {})) {
            auth_model.getSubCategory(request, function (responsecode, responsemsg, responsedata) {
                middleware.sendresponse(req, res, 200, responsecode, responsemsg, responsedata);
            });
        }
    });
});

//get productList api
router.post("/getProductList", function (req, res) {
    middleware.decryption(req, function (request) {

        var rules = {
            category_id: 'required',
            subcategory_id: 'required'

        }

        const messages = {
            'required': req.language.required,

        }

        // checks all validation rules defined above and if error send back response

        if (middleware.checkValidationRules(request, res, rules, messages, {})) {
            auth_model.getProductList(request, function (responsecode, responsemsg, responsedata) {
                middleware.sendresponse(req, res, 200, responsecode, responsemsg, responsedata);
            });
        }
    });
})

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

})

//send otp api
router.post("/sendOtp", function (req, res) {
    middleware.decryption(req, function (request) {
        var rules = {}
        if (request.phone_no != undefined && request.phone_no != '') {
            rules.phone_no = "required"
        }
        else {
            rules.email = "required|email"
        }
        const messages = {
            'required': req.language.required,

        }
        if (middleware.checkValidationRules(request, res, rules, messages, {})) {

            auth_model.sendOtp(request, function (responsecode, responsemsg, responsedata) {
                middleware.sendresponse(req, res, 200, responsecode, responsemsg, responsedata);
            });
        }


    });
});

//verify otp api
router.post("/verifyOtp", function (req, res) {
    middleware.decryption(req, function (request) {
        var rules = {
            otp: 'required'
        }

        const messages = {
            'required': req.language.required,

        }
        if (request.phone_no != undefined && request.phone_no != '') {
            rules.phone_no = "required"
        }
        else {
            rules.email = "required|email"
        }


        if (middleware.checkValidationRules(request, res, rules, messages, {})) {

            auth_model.verifyOtp(request, function (responsecode, responsemsg, responsedata) {
                middleware.sendresponse(req, res, 200, responsecode, responsemsg, responsedata);
            });
        }


    });
});



module.exports = router; 