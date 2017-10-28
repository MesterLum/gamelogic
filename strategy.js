'use strict'

const LocalStrategy = require('passport-local').Strategy;


module.exports = passport =>{

	//Se serializa solo el id del usuario en la session
	passport.serializeUser(function(user, done) {
        console.log('perro');
  		done(null, user.id);
	});

	//Se deszewrializa con el id
	passport.deserializeUser(function(id, done) {
        console.log(
            'perrpo'
        )
        done(1);


		
	});


	passport.use(new LocalStrategy(
  	function(matricula, done) {
        console.log('perro');
        done(1);



		
  }
));


}