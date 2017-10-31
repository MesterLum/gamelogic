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
        name : req.body.name,
        nip : req.body.nip,
        group : req.body.group
        
    });
    
    instanceStudents.save(err =>{
        if (err) res.status(500).send({message : 'Hubo un problema al insertarlo'});
        else res.status(200).send({message: 'Se ha insertado con éxito', student : instanceStudents})
    })
    
    
}

function login(req, res){
    
    modelStudents.find({id_student : req.body.id_student},{__v : false}, (err, data) =>{
        if (err) res.status(500).send({message : 'Hubo un error'});
        if (data.length > 0){
            
            res.status(200).send({data : services.encodeToken(data[0])});
        }
        else
            res.status(202).send({message : 'Matricula incorrecta'});
    });
}

//TMP solo envia los datos fijos para un usuario, tiene que recivir el id del estudiante


function getLevels(req,res){
    let modelProblems = mongoose.model('Problems');
    modelProblems.find({group : '59edab3d60a12ebd8d5d6ca3'},{_id : false,__v : false, group : false, }, (err, results)=>{

        if (err) res.status(500).send({message : 'Hubo un error'});
        else res.status(200).send({data : results});

    });
}

//TMP tiene que recibir el ID del estudiante

function getLevel(req,res){

   modelStudents.findOne({id_student : 1040}, (err, result) =>{
        if (err) res.status(500).send({message : 'hubo un error'});
        else{
            let modelProblems = mongoose.model('Problems');
            modelProblems.find({group : result.group, level : result.level}, (err, result)=>{
                if (err) res.status(500).send({message : 'hubo un error'});
                else res.status(200).send({data : result});
            });
        }
   });

}



module.exports = {
    registerStudent,
    login,
    getLevels,
    getLevel
}



