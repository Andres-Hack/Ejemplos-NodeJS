var mysql = require('mysql');

var con = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : 'sistema123',
  database : 'mydb'
});

con.connect(function(err){
  //var sql = 'CREATE DATABASE mydb';
  //var sql = 'SELECT * FROM personal';
  //var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
  var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
  if (err) throw err;
  console.log("Conectado ..!!");
  con.query(sql,function(err, result){
    if (err) throw err;
    //console.log("Resultado : "+JSON.stringify(result));
    //console.log("Base de Datos Creado");
    //console.log("Tabla Creado ..!");
    console.log("1 row agregada !!");
  });
});
