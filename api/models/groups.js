'use strict'

const mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    


const Group = new Schema({
    description : {type : String,
                 required : true}
});

const AssignGroup = new Schema({
    id_student : {type : String,
        required : true,
        trim : true,
        unique : true,
        index : true,
        ref : 'Students'
    },
    id_group : {type: Schema.Types.ObjectId,
                ref : 'Group',
            required : true}
});

module.exports.Group = mongoose.model('Group', Group);
module.exports.AssignGroup = mongoose.model('AssignGroup', AssignGroup);