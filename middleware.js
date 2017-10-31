'use strict'

function isAuth(req, res, next){

    if (!req.isAuthenticated()) res.redirect('/');
    next();

}


module.exports = isAuth;