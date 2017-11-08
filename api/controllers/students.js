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
    
    modelStudents.findOne({id_student : req.body.id_student},{__v : false}, (err, student) =>{
        if (err) return res.status(500).send({message : 'Hubo un error'});
        if (!student) return res.status(202).send({message : 'usuario o password incorrecta'});
        if (student.nip == req.body.nip) return res.status(200).send({student : services.encodeToken(student)});
        return res.status(202).send({message : 'usuario o password incorrecta'});
    });
}



function getLevels(req,res){
    let modelProblems = mongoose.model('Problems');
    modelProblems.find({group : req.user.group},{_id : false,__v : false, group : false, }, (err, results)=>{

        if (err) res.status(500).send({message : 'Hubo un error'});
        else res.status(200).send({data : results, level : req.user.level});

    });
}



function getLevel(req,res){

   modelStudents.findById(req.user._id, (err, result) =>{
        if (err) res.status(500).send({message : 'hubo un error'});
        else{
            let modelProblems = mongoose.model('Problems');
            modelProblems.findOne({group : result.group, level : result.level}, (err, result)=>{
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



