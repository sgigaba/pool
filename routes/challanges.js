var express = require('express');
var app = express();


app.get('/', function(req, res){
res.render('challanges', {
logged : "in"
});
});

module.exports = app;