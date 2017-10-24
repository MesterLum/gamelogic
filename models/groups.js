'use strict'

const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;


const Group = new Schema({
    description : {type : String,
                 required : true}
});

const AssignGroup = new Schema({
    id_student : {type : String,
        required : true,
        trim : true,
        index : true
        },
    id_group : {type: String,
            required : true}
});

module.exports.Group = mongoose.model('Group', Group);
module.exports.AssignGroup = mongoose.model('AssignGroup', AssignGroup);