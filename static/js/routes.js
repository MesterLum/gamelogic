
(function(window, document){
'use strict'

//Controllers imports
const login = {
    login : function(form){
        
        var dataForm = new FormData(form);
        if (dataForm.get('type_user') == 1)
            console.log('estudiante');
    }
}

//Routs 
    _$.getId('content')
    .setRout('/', 'templates/index.html', login, ()=>{
        _$.getId('login').noSubmit();
    })
    .setRout('/co', 'templates/prueba2.html');
})(window, document)