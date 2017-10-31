'use strict'

const LocalStrategy = require('passport-local').Strategy,
	mongoose = require('mongoose'),
	studentModel = mongoose.model('Students');



module.exports = passport =>{


	passport.serializeUser(function(user, done) {
		done(null, user._id);
	  });
	  
	  passport.deserializeUser(function(id, done) {
		studentModel.findById(id, function(err, user) {
		  done(err, user);
		});
	  });


	passport.use(new LocalStrategy({
		usernameField: 'id_student',
		passwordField: 'nip'
	},(username, password, done) =>{

		studentModel.find({id_student : username}, (err, student) =>{
			if (err) return done(err);
		
			return done(null, student[0]);
		});


	}));



}