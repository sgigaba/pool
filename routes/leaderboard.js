var express = require('express');
var app = express();

app.get('/', function(req, res){
res.render('leaderboard', {

});
});

module.exports = app;