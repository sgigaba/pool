var express = require('express');
var app = express();
var db = require("./db");


app.get('/', function(req, res){

    db.query("USE PoolDB; SELECT * FROM Challenge WHERE Reply='none'", function(err, result){
        
        if (err){
            console.log(err);
        }
        else{
            res.render('challanges', {
                challenges: result.recordset,
                logged: "true"
            });
        }
    });
});


app.post('/', function(req, res){

    if (req.body.reply == "Accept"){
        var q = "USE PoolDB; UPDATE Challenge SET Reply = 'accepted' WHERE ChallengeID='"+ req.body.id +"'; INSERT INTO Open_event(Player_1, Player_2, GameDate, GameTime) VALUES('"+req.body.username+"', 'blah', '2019-02-02', '08:00')";
    }else{
        var q = "USE PoolDB; UPDATE Challenge SET Reply = 'declined' WHERE ChallengeID='"+ req.body.id +"'";
    }

    db.query(q, function(err, result){
        if (err){
            console.log(err);
        }
        else{
            console.log("accepted");
        }
    });
});

module.exports = app;