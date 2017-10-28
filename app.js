'use strict'

const express = require('express'),
    app = express(),
    http = require('http').createServer(app),
    bodyParser = require('body-parser'),
    models = require('./api/models/models')(),
    Routes = require('./api/routes/routes'),
    config = require('./config'),
    RouterMain = require('./routes/routes'),
    cors = require('cors'),
    session = require('express-session'),
    passport = require('passport'),
    cookieParser = require('cookie-parser');


require('./strategy')(passport);
app.use(cors());

//BodyParser
app.use(cookieParser('perro'));
//Peticiones HTTP

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.use(session({
  secret: 'perro',
  resave: true,
  saveUninitialized: true
  //cookie: { secure: true }
}));
//

//Static URL
app.use(express.static(__dirname + '/static'));
//

//Engine templates
app.engine('html', require('atpl').__express);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
//

//Routes
app.post('/login',passport.authenticate('local', { successRedirect: '/admin',
failureRedirect: '/',
failureFlash: false })

);
app.get('/student', (req, res)=>{
    res.send('20');
});
app.use('/api', Routes);
app.use('/', RouterMain);



module.exports = app;