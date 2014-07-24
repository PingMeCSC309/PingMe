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

connection.query('CREATE TABLE friendRelations'+
'(username1 VAR(65),'+
'username2 VAR(65)'+
'inviteResponse INT(25));',function(err,rows,fields){

if (err) throw err;
console.log('Table ready');
});

connection.query('CREATE TABLE globalNotifications'+
'(notificationid INT(25) AUTO_INCREMENT,'+
'recipientusername VAR(65),'+
'senderusername VAR(65),'+
'type INT(25));',function(err,rows,fields){

if (err) throw err;
console.log('Table ready');
});

connection.end();

