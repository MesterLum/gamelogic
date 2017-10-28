'use strict'

const mongoose = require('mongoose'),
     modelStudents = mongoose.model('Students'),
     services = require('../../services');

/*

    registerStudent: toma e id_student (matricula y registra el usuario)
    falta que se incluya solo el id_student
*/

function registerStudent(req,res){
    
    let instanceStudents = new modelStudents({
        id_student : req.body.id_student,
        name : req.body.name
        
    });
    
    instanceStudents.save(err =>{
        if (err) res.status(500).send({message : 'Hubo un problema al insertarlo'});
        else res.status(200).send({message: 'Se ha insertado con éxito', student : instanceStudents})
    })
    
    
}

function login(req, res){
    console.log(req.body.id_student);
    modelStudents.find({id_student : req.body.id_student},{__v : false}, (err, data) =>{
        if (err) res.status(500).send({message : 'Hubo un error'});
        if (data.length > 0){
            
            res.status(200).send({data : services.encodeToken(data[0])});
        }
        else
            res.status(202).send({message : 'Matricula incorrecta'});
    });
}


module.exports = {
    registerStudent,
    login
}



