var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');

var connection = mysql.createConnection({
host		: 'db4free.net',
user		: 'pingme',
password	: 'csc309enc',
database	: 'pingme'
});

var app = express();

app.use(bodyParser());

app.use(express.static(__dirname));
app.use(express.static(__dirname + '/html'));
app.use(express.static(__dirname + '/img'));

app.post('/reg', function(req, res){
	console.log(req.body);

	if (req.body.password.trim() == "" || req.body.username.trim() == "" || req.body.email.trim() == ""){
		req.body.password = null;}
	
	connection.query('INSERT INTO users'+
	' SET username = ?'+
	', password = ?'+
	', email = ?',
	[req.body.username,
	req.body.password,
	req.body.email], function (err, rows, fields) {
		if (err){
			console.log(err);
			res.sendfile('html/regerr.html');
		}
		else{
			console.log('User inserted');
			res.sendfile('html/home.html');
		}
	});	
});

app.post('/log', function(req, res){
	console.log(req.body);

	var name = req.body.username;

	var user = 'SELECT * FROM users WHERE username="'+req.body.username+'" AND password="'+req.body.password+'"';

	connection.query(user, function(err, rows, fields) {
		if (err) throw err;
		if(!rows[0]){
			console.log("User not found");
			res.sendfile('html/logerr.html');}
		else{
			console.log("User found");
			res.sendfile('html/pingbasic.html');}
	});
}); 

app.get('/', function(req, res){
	res.sendfile('html/home.html');
});

app.listen(3000);