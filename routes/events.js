var express = require("express");
var app = express();
var db = require("./db");


app.get('/', function(req, res){
    db.query("USE PoolDB; SELECT * FROM OPEN_EVENT", function(err, results){
        playerone = [];
        playertwo = [];
        v = 0;
        if (err){
            console.log(err);
        }else{
     
        }
        res.render('events',{
            logged : "in",
            player : results.recordset
        });
        
    });
  
});

app.post('/', function(req, res){
date = req.body.date;

});

module.exports = app;