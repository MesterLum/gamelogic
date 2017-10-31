'use strict'

const express = require('express'),
    app = express(),
    http = require('http').createServer(app),
    bodyParser = require('body-parser'),
    models = require('./api/models/models')(),
    Routes = require('./api/routes/routes'),
    config = require('./config'),
    routerStudent = require('./routes/routes'),
    cors = require('cors'),
    session = require('express-session'),
    passport = require('passport'),
    cookieParser = require('cookie-parser'),
    isAuth = require('./middleware'),
    io = require('socket.io').listen(http);


require('./strategy')(passport);

//BodyParser
//Peticiones HTTP

//Indicamos que usaremos sessiones para almacenar los usuarios
app.use(cookieParser('perro'));
//Peticiones HTTP


app.use(session({
  secret: 'perro',
  resave: false,
  saveUninitialized: false
  //cookie: { secure: true }
}));
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());


app.use(cors());


//passport

app.use(passport.initialize());
app.use(passport.session());
//Static URL
app.use(express.static(__dirname + '/static'));
//

//Engine templates
app.engine('html', require('atpl').__express);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
//

//Routes
app.post('/login',
passport.authenticate('local', { successRedirect: '/profile/student',
                                 failureRedirect: '/',
                                 failureFlash: false })
);

app.get('/', (req, res) =>{

    if (req.isAuthenticated()) res.redirect('/profile/student');
    res.render('index');

});


app.use('/api', Routes);
app.use('/profile/student',isAuth, routerStudent);

io.on('connection', data =>{
    console.log('alguien se conecto');
});

module.exports = app;