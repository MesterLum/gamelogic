'use strict'

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/gamelogic',{useMongoClient : true}, (err)=>{
    if (err) throw err;
    console.log('db conectada');
});

var Scheme = mongoose.Schema({
    nombre : {type : String}
});


var x = mongoose.model('User1', Scheme);

var prro = new x();
prro.nombre = 'cuauhtémoc';
prro.save( (err, data) =>{
    console.log(data);
})


