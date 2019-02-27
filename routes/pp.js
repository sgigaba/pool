var express = require('express');
var app = express();
var db = require('./db');
var session = require('express-session');
const multer = require('multer');
const formidable = require('formidable');
var fs = require('fs');

app.get('/', function(req, res){
});


app.post('/', function(req, res){
   
    var ses = sesh.email;
    console.log("over here");
    console.log(ses);
    var form = new formidable.IncomingForm();

    form.parse(req);
    form.on('fileBegin', function (name, file){
        file.path = 'public' + '/uploads' + file.name;
        console.log("file path: " + file.path);
    });

    form.on('file', function (name, file){
        console.log('Uploaded' + file.name);
        db.query("USE PoolDB; SELECT * from Player WHERE Email = '"+ses+"'", function(err, results){
            if (err){
                console.log(err);
            }else{
                db.query("Use PoolDb; UPDATE Player SET pp = '"+file.name+"' WHERE Email = '"+ses+"'");
            }

        });

    });
});

module.exports = app;