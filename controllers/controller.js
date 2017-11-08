'use strict'

//Pagina principal

function index(req, res){

    res.render('student/student', {student  : req.user});
}

//Verificar si esta login el usuario SPA

function isLogin(req,res){

    res.status(200).send({isLogin : true});
}

module.exports = {
    index,
    isLogin
}