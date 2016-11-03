var express = require('express');
var request = require('request');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //var curServer = process.env.NODE_ENV == 'development' ? 'localhost:8080' : 'localhost:3000';
  res.render('index', { title: 'Express', curServer: 'localhost:3000' });
});

router.post('/testApi', function(req, res, next){
  request.post('http://www.beta.fabao.cn/api/FABAO_WEBSITE/news/getnewsinfo', function(err, request, body){
    if(!err){
      res.send(body);
    }else{
      res.send({status:{code:0, desp: '接口请求失败'}, result:'请求失败'});
    }
  }).form(req.body)
})

module.exports = router;
