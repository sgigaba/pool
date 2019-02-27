var express = require("express");
var app = express();
var db = require("./db");


app.get('/', function(req, res){

    db.query("USE PoolDB; SELECT * FROM Events", function(err, results){
        res.render('events',{
            logged : "in",
            event:results.recordset
        });
    });

    // db.query("USE PoolDB; SELECT * FROM OPEN_EVENT", function(err, results){
    //     playerone = [];
    //     playertwo = [];
    //     v = 0;
    //     if (err){
    //         console.log(err);
    //     }else{
     
    //     }
    
        
    // });
  
});

app.post('/', function(req, res){
date = req.body.date;
name = req.body.name;
noofplayers = req.body.noofplayers;
info = req.body.info;


console.log(date);
console.log(name);
console.log(noofplayers);
console.log(info);

db.query("USE PoolDB; INSERT INTO events (eventname,date, organise, bio) VALUES ('"+name+"','"+date+"', '"+sesh.email+"', '"+info+"')", function(err, results){
    if (err){
        console.log(err);
    }else{
        console.log("event created");
    }
});
});

module.exports = app;