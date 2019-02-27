var express = require('express');
var app = express();
var sql = require("mssql");

app.set('port', process.env.PORT || 3000);

var config = {
    server: '192.168.45.188',
    databse: 'PoolDB',
    user: 'sa',
    password: 'asdf~123',
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