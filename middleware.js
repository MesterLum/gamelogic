'use strict'
const services = require('./services');
function ensureAuth(req,res,next){
    if (!req.headers.authorization)
        return res.status(403).send({message : 'No se establecio cabecera authorization'});

    const token = req.headers.authorization.split(' ')[1];
    services.decodeToken(token)
    .then(response =>{
        
        req.user = response.sub;
        next();
    })
    .catch(response =>{
        return res.status(500).send(response);
    });
    
}

module.exports = ensureAuth;