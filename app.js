var express 	  = require('express');
var app			  = express();
var	express 	  = require('ejs'); 
var path		  = require('path');
var bodyParser 	  = require('body-parser');
var cookieParser  = require('cookie-parser');
var session       = require('express-session');
var passport	  = require('passport');
var pg			  = require('pg');
var LocalStrategy = require('passport-local').Strategy;
var passport      = require('passport');
var methodOverride= require('method-override');

app.set('view engine', 'ejs');
app.use(methodOverride('_method'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':true}));
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));


app.get('/', function(req, res){
	res.render('home')
});

app.get('/page_example', function(req, res){
	res.render('page_example')
});

app.get('/event_example', function(req, res){
	res.render('event_example')
});

app.get('/container_example', function(req, res){
	res.render('container_example')
});



app.listen(process.env.PORT || 8000);