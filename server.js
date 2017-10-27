'use strict'

const app = require('./app'),
    config = require('./config'),
    mongoose = require('mongoose');


mongoose.Promise = global.Promise;
mongoose.connect(config.URL_CONNECTION, {useMongoClient : true}, (err) =>{
    if (err) throw err;
    console.log('MongoDB corriendo');
    app.listen(config.PORT, ()=>{
        console.log(`Servidor corriendo ${config.PORT}`);
    });
});