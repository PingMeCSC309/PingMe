var mysql = require('mysql');

var connection = mysql.createConnection({
host		: 'db4free.net',
user		: 'pingme',
password	: 'csc309enc',
database	: 'pingme'
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
'(userid1 INT(25),'+
'userid2 INT(25)'+
'inviteResponse INT(25));',function(err,rows,fields){

if (err) throw err;
console.log('Table ready');
});

connection.query('CREATE TABLE globalNotifications'+
'(notificationid INT(25) AUTO_INCREMENT,'+
'recipientid INT(25),'+
'senderid INT(25),'+
'type INT(255));',function(err,rows,fields){

if (err) throw err;
console.log('Table ready');
});






connection.end();

