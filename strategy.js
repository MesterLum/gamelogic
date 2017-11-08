'use strict'

const LocalStrategy = require('passport-local').Strategy,
	mongoose = require('mongoose'),
	studentModel = mongoose.model('Students');



module.exports = passport =>{


	passport.serializeUser(function(user, done) {
		console.log('estoy aqui', user);
		done(null, user._id);
	  });
	  
	  passport.deserializeUser(function(id, done) {
			studentModel.findById(id, function(err, user) {
				console.log(id);
				done(err, user);
			});
	  });


	passport.use(new LocalStrategy({
		usernameField: 'id_student',
		passwordField: 'nip',
		passReqToCallback : false
	},(username, password, done) =>{
		
		studentModel.findOne({id_student : username}, (err, student) =>{
			if (err) return done(err);
			if (!student) return done(null, false, {message : 'Usuario o contrasena incorrecta'});
			else{
				if (student.nip == password) return done(null, student);
				else return done(null, false, {message : 'Usuario o contrasena incorrecta'});
			}

		});


	}));



}