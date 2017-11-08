'use strict'

const express = require('express'),
    app = express(),
    http = require('http').Server(app),
    bodyParser = require('body-parser'),
    models = require('./api/models/models')(),
    Routes = require('./api/routes/routes'),
    config = require('./config'),
    routerStudent = require('./routes/routes'),
    session = require('express-session'),
    passport = require('passport'),
    cookieParser = require('cookie-parser'),
    isAuth = require('./middleware'),
    io = require('socket.io').listen(http);


require('./strategy')(passport);

//BodyParser


app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());




//Static URL
app.use(express.static(__dirname + '/static'));
//

//Engine templates
app.engine('html', require('atpl').__express);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
//

//Routes


app.get('/', (req, res) =>{
    
    
    res.render('index');

});


app.use('/api', Routes);
app.use('/profile/student',routerStudent);

module.exports = app;