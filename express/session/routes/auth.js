var express = require('express');
var router = express.Router();
var template = require('../lib/template.js');

var authData={
    email:'egoing@com',
    password: '111111',
    nickname: 'egoing'
}


router.get('/login', function(request, response){
    var title = 'WEB - login';
    var list = template.list(request.list);
    var html = template.HTML(title, list, `
      <form action="/auth/login_process" method="post">
        <p><input type="text" name="email" placeholder="email"></p>
        <p><input type="password" name="pwd" placeholder="password"></p>
        <p><input type="submit" value="login"></p>
      </form>
    `, '');
    response.send(html);
  });

router.post('/login_process', function(request, response){
    var post = request.body;
    var email = post.email;
    var pwd = post.pwd;
    console.log(post);
    if(email === authData.email && pwd === authData.password){
        request.session.is_logined = true;
        request.session.nickname = authData.nickname;
        request.session.save(function(){
            response.redirect('/'); 
        });
    }else{
        response.redirect('/auth/login') //alert하는 방법 찾아보기
    }
  });

router.get('/logout', function(request, response){
    request.session.destroy(function(err){
        response.redirect('/'); //바로안되고 connection refused 됐다가 redirest됨
    })
  });

  module.exports = router;