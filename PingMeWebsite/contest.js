var mysql = require('mysql');

var connection = mysql.createConnection({
host		: 'mysql.hostinger.co.uk',
user		: 'u928316282_me',
password	: 'csc309enc',
database	: 'u928316282_ping'
});
connection.connect();
connection.query('CREATE TABLE users'+
'(userid INT(25) AUTO_INCREMENT,'+
'username VARCHAR(65) NOT NULL,'+
'password VARCHAR(32) NOT NULL,'+
'email VARCHAR(255) NOT NULL,'+
'PRIMARY KEY (userid));',function(err,rows,fields){

if (err) throw err;
console.log('Table ready');
});

connection.end();