'use strict'

const mongoose = require('mongoose'),
    Schema = mongoose.Schema;


const Teacher = new Schema({

    name : {type : String,
            trim: true,
            required : true},
    last_name : {type : String,
            trim : true,
            required : true},

    groups : [{type : Schema.Types.ObjectId,index : true, unique : true, ref: 'Group'}]
    
});

module.exports.Teacher = mongoose.model('Teacher', Teacher);