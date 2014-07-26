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

app.post('/getFriend', function(req, res) {
	console.log(req.body);

	var check = 'SELECT * FROM users WHERE username="'+req.body.friend+'"';

connection.query(check, function(err, rows, fields) {
		if (err) throw err;
		if(!rows[0]){
			console.log("User not found");}
		else{
			console.log("Reqested user found");

connection.query('INSERT INTO friendRelations'+
	' SET username1 = ?'+
	', username2 = ?'+
	', inviteResponse = ?',
	[req.body.user,
	req.body.friend,
	0], function (err, rows, fields) {
		if (err){
			console.log(err);
		}
		else{
			console.log('Friend request inserted');
		}
	});

connection.query('INSERT INTO globalNotifications'+
	' SET recipientusername = ?'+
	', senderusername = ?'+
	', type = ?',
	[req.body.friend,
	req.body.user,
	1], function (err, rows, fields) {
		if (err){
			console.log(err);
		}
		else{
			console.log('Notification inserted');
		}
	});	


		}
	});

	
});

app.post('/getNotif', function(req, res){
	console.log("Checking "+req.body.user+"'s notifications");

	var name = req.body.user;

	var user = 'SELECT * FROM globalNotifications WHERE recipientusername="'+req.body.user+'"';

	connection.query(user, function(err, rows, fields) {
		if (err) throw err;
		if(!rows[0]){
			console.log("No notifications");}
		else{
			console.log("Notifications found");
			console.log(rows);
			app.get('/Notif', function(req, res){
  res.send(rows);
		});}
	});
}); 

app.post('/getPing', function(req, res){
	console.log(req.body);

connection.query('INSERT INTO pings'+
	' SET username = ?'+
	', latit = ?'+
	', longit = ?'+
	', time = ?',
	[req.body.user,
	req.body.latit,
	req.body.longit,
	req.body.time], function (err, rows, fields) {
		if (err){
			console.log(err);
		}
		else{
			console.log('Ping inserted');
		}
	});	


}); 

app.listen(3000);