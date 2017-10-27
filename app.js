'use strict'

const express = require('express'),
    app = express(),
    http = require('http').createServer(app),
    bodyParser = require('body-parser'),
    models = require('./api/models/models')(),
    Routes = require('./api/routes/routes'),
    config = require('./config'),
    RouterMain = require('./routes/routes');





//BodyParser
app.use(bodyParser.urlencoded({extended : false }));
app.use(bodyParser.json());
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
app.use('/api', Routes);
app.use('/', RouterMain);



module.exports = app;