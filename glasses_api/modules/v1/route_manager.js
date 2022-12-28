var express = require('express');
var router = express.Router();
const middleware = require('../../middleware/headerValidator');

var auth    = require('./Auth/route');
var admin    = require('./Admin/route');

router.use('/', middleware.extractHeaderLanguage);
router.use('/', middleware.validateHeaderApiKey);
router.use('/', middleware.validateHeaderToken);

router.use('/auth/user',auth);
router.use('/auth/admin',admin);

module.exports = router;