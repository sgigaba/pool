var express = require('express');
var app = express();
var session = require('express-session');
var db = require('./db');


app.get('/', function(req, res){
    console.log("printing here:");
    console.log(sesh.email);
    var path;
    db.query("USE PoolDB; SELECT * FROM Player WHERE Email = '"+sesh.email+"'", function(err, result){
        if (err){
            console.log(err);
        }else{
            console.log("in");
        }
        if (!(result.recordset[0].pp)){
            db.query("Use PoolDb; UPDATE Player SET pp = 'bbd.png' WHERE Email = '"+sesh.email+"'");
            path = "bbd.png";
        }
        else{
            path = result.recordset[0].pp;
            console.log(path);
        }
        res.render('userprofile', {
            name: result.recordset[0].Username,
            logged: "true",
            path: path
        });


    });

});

module.exports = app;