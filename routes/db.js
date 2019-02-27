var express = require('express');
var app = express();
var sql = require("mssql");

app.set('port', process.env.PORT || 3000);

var config = {
    server: 'localhost',
    databse: 'PoolDB',
    user: 'sam',
    password: 'SamboGX105',
    port: 1433
}
var conn = new sql.ConnectionPool(config);
var request = new sql.Request(conn);
function getEmp(){

conn.connect(function(err){
    if (err){
        console.log(err);
        return;
    }else{
        console.log("DB connected");
    }
});


 }

getEmp();

module.exports = conn;
module.exports = request;