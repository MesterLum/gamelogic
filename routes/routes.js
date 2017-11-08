'use strict'

const express = require('express'),
    app = express.Router(),
    controller = require('../controllers/controller'),
    ensureAuth = require('../middleware');


//Pagina principal
app.get('/', controller.index);
app.post('/isLogin', ensureAuth, controller.isLogin);




module.exports = app;