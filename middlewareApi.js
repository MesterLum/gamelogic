'use strict'

function isAuth(req, res, next){
    console.log(req.user);
    if (!req.isAuthenticated()) return res.status('200').send({message : 'No tienes permisos'});
    
    next();

}


module.exports = isAuth;