var express = require('express');
var app = express();
var db = require('./db');
var session = require('express-session');



app.get('/', function(req, res){

    res.render('signup', {

    });
});

app.post('/', function(req, res){

    sesh = req.session;
email = req.body.email;
name = req.body.name;
password = req.body.password;

console.log(email);
console.log(name);
console.log(password);

db.query("USE PoolDB INSERT INTO Player (Username, Email, Score, Pass) VALUES ('"+name+"', '"+email+"', '"+0+"', '"+password+"')", function(err, recordset){
    if (err){
        console.log(err);
    }else{
        console.log("User added");
        res.redirect('login');
    }
});
console.log("sending stuff");
});


module.exports = app;