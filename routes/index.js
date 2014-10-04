var express = require('express');
var router = express.Router();

require("twilio-node/lib");

// Your accountSid and authToken from twilio.com/user/account
var accountSid = 'AC8b9da60c81b3b9cbf8bc1df0bc1064e9';
var authToken = "9c2d302bb7a28d47dd395ef38a846557";
var client = require('twilio')(accountSid, authToken);

/* GET home page. */
router.get('/', function(req, res) {

});

router.post('/respond', function(req, res) {

	console.log('i requested');
  //res.render('index', { title: 'Express' });
});

module.exports = router;