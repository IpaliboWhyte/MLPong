var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {

  //res.render('index', { title: 'Express' });
});

router.post('/respond', function(req, res) {

	res.send('<?xml version="1.0" encoding="UTF-8"?>');

	console.log('i requested');
  //res.render('index', { title: 'Express' });
});

module.exports = router;