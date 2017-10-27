'use strict'

const express = require('express'),
    app = express.Router(),
    controllerStudents = require('../controllers/students'),
    controllerGroups = require('../controllers/groups'),
    controllerTeacher = require('../controllers/tecacher');


//Students
app.post('/students/register', controllerStudents.registerStudent);
app.post('/students/login', controllerStudents.login);
//

//Groups
app.post('/groups/register', controllerGroups.registerGroup);
app.post('/groups/assign', controllerGroups.assignGroup);
//

//Teachers
app.post('/teacher/register', controllerTeacher.registerTeacher);
app.post('/teacher/assigngroup', controllerTeacher.assignGroupTeacher);
//


module.exports = app;