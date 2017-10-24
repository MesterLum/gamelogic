'use strict'

const express = require('express'),
    app = express.Router(),
    controllerStudents = require('../controllers/students'),
    controllerGroups = require('../controllers/groups');


//Students
app.post('/students/registerstudent', controllerStudents.registerStudent);
app.post('/students/login', controllerStudents.login);
//

//Groups
app.post('/groups/registergroup', controllerGroups.registerGroup);
app.post('/groups/assigngroup', controllerGroups.assignGroup);
//


module.exports = app;