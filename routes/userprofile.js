var express = require('express');

var app = express();


app.get('/', function(req, res){

    res.render('userprofile', {
        logged: "true"
    });
});

module.exports = app;