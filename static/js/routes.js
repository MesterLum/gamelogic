
(function(window, document){
'use strict'

//Controllers imports
const login = {
    login : function(form){
        
        var dataForm = new FormData(form);
        if (dataForm.get('type_user') == 1){
            window.location.href = '#/student';
        }
        else if(dataForm.get('type_user') == 2){
            window.location.href = '#/teacher';
        }
    }
}

//Routs 
    _$.getId('content')
    .setRout('/', 'templates/index.html', login, ()=>{
        _$.getId('login').noSubmit();
    })
    .setRout('/student', 'templates/login/student.html', null, null)
    .setRout('/teacher', 'templates/login/teacher.html', null, null);
})(window, document)