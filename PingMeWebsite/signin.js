var mysql = require('mysql');

var connection = mysql.createConnection({
host		: 'db4free.net',
user		: 'pingme',
password	: 'csc309enc',
database	: 'pingme'
});
connection.connect();

var name="test"
var pass="terst"

var user = 'SELECT * FROM users WHERE username="'+name+'" AND password="'+pass+'"';

connection.query(user, function(err, rows, fields) {
	if (err) throw err;
	if(!rows[0]){console.log("No user");}
}); 