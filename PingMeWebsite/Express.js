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

/*After logging in, use the user's username from the database in order to perform SQL queries / functionalities.
1. Check notifications if any by using the sql query

Select *
From globalNotifications
Where recipientname = username 

When done, delete the row using the primary key notificationid to avoid long computations.

1a) If the type = 1, the user has a new friend request and requires the user accept friend or block. 
Notify the user that sendername from the sql query wants to become friends with user and requires a response.
If accept, update the friendRelations table

UPDATE friendRelations
SET inviteResponse = 1
WHERE username1 = senderusername and username2 = recipientusername

2. Adding friend

Take the string friend provided by the user in the textbox and find it in the database. If it exists, add the relation to the table friendRelations
INSERT VALUES (username,friend,0) INTO friendRelations

Take the string friend provided by t
he user in the textbox and add a notification in the table globalNotifications so the recipient will get notified of the
friend request
INSERT VALUES (username,friend,1); */







});

app.listen(3000);
