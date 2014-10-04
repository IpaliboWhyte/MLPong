var express = require('express');
var router = express.Router();

require("twilio-node/lib");

// Your accountSid and authToken from twilio.com/user/account
var accountSid = 'AC8b9da60c81b3b9cbf8bc1df0bc1064e9';
var authToken = "9c2d302bb7a28d47dd395ef38a846557";
var client = require('twilio')(accountSid, authToken);

client.messages.create({
	body: "Jenny please?! I love you <3",
	to: "+447703358144",
	from: "+14158141829"
	}, function(err, message) {
		console.log(message);
		//process.stdout.write(message.sid);
});

/* GET home page. */
router.get('/', function(req, res) {

});

router.post('/respond', function(req, res) {

	res.send('<?xml version="1.0" encoding="UTF-8"?>');

	console.log('i requested');
  //res.render('index', { title: 'Express' });
});

module.exports = router;