// var express = require('express');
// var app = express();

// app.get('/', function(req, res){
// res.render('leaderboard', {
// logged : "is"
// });
// });

// module.exports = app;

var express = require('express');
var app = express();
var db = require("./db");

app.get('/', function(req, res){
    db.query("USE PoolDB; SELECT * FROM Player ORDER BY Score ASC", function(err, result)
    {
        if (err){
            console.log(err);
        }
        else{
            res.render('leaderboard', {
                players: result.recordset,
                logged: "true"
            });
        }
    });
});

app.post('/', function(req, res){
    db.query("INSERT INTO Challenge(Challenged, Challenger, Reply) VALUES('"+req.body.username+"', 'kondieii', 'none')", function(err, result){
        if (err){
            console.log(err);
        }
        else{
            console.log("Challenged");
        }
    });
});

module.exports = app;