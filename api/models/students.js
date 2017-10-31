'use strict'

const mongoose = require('mongoose'),
    Schema = mongoose.Schema;


const Students = new Schema({
    id_student : {type : String,
                required : true,
                trim : true,
                index : true
                },
    nip : {type : String, required : true},
    date : {type: Date,
            default: Date.now},
    name : {type : String,
            trim : true,
            required : true
            },
    level : {type : Number, default : 0},
    group : {type : Schema.Types.ObjectId, required : true}

});

module.exports = mongoose.model('Students', Students);