'use strict'

const mongoose = require('mongoose'),
    modelGroup = mongoose.model('Group'),
    modelAssignGroup = mongoose.model('AssignGroup');


function registerGroup(req, res){
    
    let group = new modelGroup({
        description : req.body.description
    });

    group.save(err =>{
        if (err) res.status(500).send({message : 'Hubo un problema al insertar el grupo'});
        else res.status(200).send({message: 'Se ha insertado con éxito el grupo'});
    })

}


function assignGroup(req,res){
   
    let group = new modelAssignGroup({
        id_student : req.body.id_student,
        id_group : req.body.id_group
    });

    group.save(err =>{
        if (err) throw err;
        else res.status(200).send({message: 'Se ha assignado el usuario al grupo'});
    });

}



module.exports = {
    registerGroup,
    assignGroup
}