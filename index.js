var express = require('express');
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var app = express();
const homepage = require('./routes/homepage');
const userprofile = require('./routes/userprofile');
const leaderboard = require('./routes/leaderboard');
const events = require('./routes/events');
const challenges = require('./routes/challanges');
const login = require('./routes/login');
const session = require('express-session');
const signup = require('./routes/signup');
var bodyparser = require('body-parser');
var sql = require("mssql");
var db = require('./routes/db');

app.engine('handlebars', handlebars.engine);
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'handlebars');
app.use(bodyparser.urlencoded({
    extended: true}));

app.use(express.static(__dirname + '/public'));
app.use('/', homepage);
app.use('/leaderboard', leaderboard);
app.use('/userprofile', userprofile);
app.use('/events', events);
app.use('/challanges', challenges);
app.use('/login', login);
app.use('/signup', signup);
app.listen(app.get('port'), function(){
    console.log('started');
    });