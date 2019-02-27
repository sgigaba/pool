var express = require('express');
var app = express();
var db = require('./db');


app.get('/', function(req, res){
res.render('homepage', {

});
});

app.post('/', function(req, res){
// email = req.body.email;
// console.log(email);
// console.log("I wanna send some stuff");

// db.query("USE PoolDB INSERT INTO Player (Username, Email, Score) VALUES ('ljdskjds', 'fkjdskj', '"+33+"')", function(err, recordset){
//     if (err){
//         console.log(err);
//     }else{
//         console.log(recordset);
//     }
// });

// db.query("USE PoolDB SELECT * FROM Player", function(err, recordset){
//     if (err){
//         console.log(err);
//     }
//     else{
//         console.log("It's ALIVE");
//         console.log(recordset);
//     }
// });
});
module.exports = app;