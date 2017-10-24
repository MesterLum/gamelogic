'use strict'

const express = require('express'),
    app = express(),
    http = require('http').createServer(app),
    bodyParser = require('body-parser'),
    models = require('./models/models')(),
    Routes = require('./routes/routes'),
    config = require('./config');





//BodyParser
app.use(bodyParser.urlencoded({extended : false }))
app.use(bodyParser.json());
//

//Engine templates
app.engine('html', require('atpl').__express);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
//

//Routes
app.use('/api', Routes);



module.exports = app;