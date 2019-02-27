var express = require('express');
var app = express();
var db = require('./db');


app.get('/', function(req, res){
res.render('homepage', {
    not : "yes"

});
});

app.post('/', function(req, res){

});
module.exports = app;