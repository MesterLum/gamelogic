'use strict'

const jwt = require('jwt-simple'),
    moment = require('moment'),
    config = require('./config');
    
function encodeToken(matricula){

    const payload = {
        sub : matricula,
        iat : moment().unix(),
        exp : moment().add(14, 'days')
    }

    return jwt.encode(payload, config.SECRET);
}

function decodeToken(token){

    const pro = new Promise((resolv, reject) =>{

        try{

            const payload = jwt.decode(token, config.SECRET);

            if (payload.exp <= moment().unix()){
                reject({
                    message : 'El token ha expirado',
                    status : 401
                });
            }

            resolv(payload);

        }catch(err){
            reject({
                status : 500,
                message : 'internal error'
            });
        }

    });
    return pro;
}

module.exports = {
    encodeToken
}