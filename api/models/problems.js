'use strict'

const mongoose = require('mongoose'),
    Schema = mongoose.Schema;


const Problem = new Schema({

    group : {type : Schema.Types.ObjectId, required : true, ref : 'Group'},
    level : {type : Number, required : true},
    description : {type : String, required : true},
    in : {type : new Array(), required : true},
    out : {type : new Array(), required : true}

});



module.exports = mongoose.model('Problems', Problem);