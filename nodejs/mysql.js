// 데이터베이스 mysql 접속하기 연습용

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '192.168.0.16',
  user     : 'nodejs',
  password : '12345',
  database : 'opentutorials'
});
 
connection.connect();
 
connection.query('SELECT * FROM topic', function (error, results, fields) {
  if (error) {
      console.log(error);
  }
  console.log(results);
});
 
connection.end();
