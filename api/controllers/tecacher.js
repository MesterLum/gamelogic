'use strict'

const mongoose = require('mongoose'),
    teacherModel = mongoose.model('Teacher');


function registerTeacher(req,res){

    const Teacher = new teacherModel({
        name : req.body.name,
        last_name : req.body.last_name
    });

    Teacher.save((err, data) =>{
        if (err) res.status(500).send({message : 'Hubo un error al registrar al profesor'});
        else res.status(200).send({data : data});

    });

}

function assignGroupTeacher(req,res){
    
    teacherModel.findByIdAndUpdate(req.body.id_teacher, {$addToSet : {"groups" : req.body.id_group}}, (err, data) =>{
        
        if (err) throw err;
        
        else res.status(200).send({data : data});
        
    });


}

module.exports = {
    registerTeacher,
    assignGroupTeacher
}