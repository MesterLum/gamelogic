'use strict'

const express = require('express'),
    app = express.Router(),
    controller = require('../controllers/controller');


//Pagina principal
app.get('/', controller.index);




module.exports = app;