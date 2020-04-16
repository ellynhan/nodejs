var mysql = require('mysql');
var db = mysql.createConnection({
    host     : '',
    user     : '',
    password : '',
    database : ''
  });
module.exports = db;
//버전관리할 때 이렇게 저장하고, 각자 작업할때 복사해서 db.js파일을 만들어 사용하는 것