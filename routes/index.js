var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //var curServer = process.env.NODE_ENV == 'development' ? 'localhost:8080' : 'localhost:3000';
  res.render('index', { title: 'Express', curServer: 'localhost:8080' });
});

module.exports = router;
