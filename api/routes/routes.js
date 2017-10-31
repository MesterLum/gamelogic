'use strict'

const express = require('express'),
    app = express.Router(),
    controllerStudents = require('../controllers/students'),
    controllerGroups = require('../controllers/groups'),
    controllerTeacher = require('../controllers/tecacher'),
    controllerProblem = require('../controllers/problems'),
    middleware = require('../../middlewareApi');


//Students
app.post('/students/register', controllerStudents.registerStudent);
app.post('/students/login', controllerStudents.login);
app.post('/students/getlevels', controllerStudents.getLevels);
app.post('/students/getlevel', controllerStudents.getLevel);
//

//Groups
app.post('/groups/register', controllerGroups.registerGroup);
app.post('/groups/assign', controllerGroups.assignGroup);
//

//Teachers
app.post('/teacher/register', controllerTeacher.registerTeacher);
app.post('/teacher/assigngroup', controllerTeacher.assignGroupTeacher);
//

//Problems
app.post('/problem/setproblem', controllerProblem.registerProblem);


module.exports = app;