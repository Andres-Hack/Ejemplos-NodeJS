var mysql = require('mysql');

var con = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : 'sistema123',
  database : 'mydb'
});

con.connect(function(err){
  var sql = "SELECT * FROM customers";
  if (err) throw err;
  console.log("Conectado ..!!");
  con.query(sql,function(err, result, fields){
    if (err) throw err;
    console.log(result);
  });
});
