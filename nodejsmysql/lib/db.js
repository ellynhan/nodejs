var mysql = require('mysql');
var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root1111',
    database : 'opentutorials'
  });
  module.exports = db;