'use strict'

//Pagina principal

function index(req, res){

    res.render('student/student', {student  : req.user});
}


module.exports = {
    index
}