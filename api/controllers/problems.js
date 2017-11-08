'use strict'

const mongoose = require('mongoose'),
    modelProblems = mongoose.model('Problems');

function registerProblem(req, res){

    const problem = new modelProblems({
        group : req.body.group,
        level : req.body.level,
        description : req.body.description,
        in : req.body.in.split(','),
        out : req.body.out.split(',')
    });

    problem.save((err)=>{
        if (err) res.status(500).send('Hubo un error');
        else res.status(200).send('Se inserto correctamente');
    });

}

module.exports = {
    registerProblem
}