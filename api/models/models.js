'use strict'

/*
    Aqui se exportaran todos los modelos.
*/


module.exports = ()=>{
    //Groups
    require('./students');
    //--------

    //Groups
    require('./groups').AssignGroup;
    require('./groups').Group;
    require('./teachers').Teacher;
    //

    //Problems
    require('./problems');
    //
}