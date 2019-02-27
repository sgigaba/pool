var express = require('express');
var app = express();
const session = require('express-session');
const db = require('./db');

app.get('/', function(req, res){

res.render('login', {

});

});

app.post('/', function(req, res){
email = req.body.email;
password = req.body.password;
sesh = req.session;
sesh.email = email;
// console.log(email);
// console.log(password);

db.query("USE PoolDB; SELECT * FROM PLAYER WHERE Email = '"+email+"' AND pass = '"+password+"'", function(err, recordset){
    if (err){
        console.log(err);
    }else{
        if(recordset){
            console.log(recordset.rowsAffected);
            if (recordset.rowsAffected == 1){
                sesh.loggedin = 1;
                res.redirect('leaderboard');
            }
        }
    }
    if(sesh.id){
        console.log(sesh.email);
    }
});

});



module.exports = app;