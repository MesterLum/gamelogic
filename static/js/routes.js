
(function(window, document){
'use strict'

//Controllers imports
const login = {
    login : function(form){
        
        var dataForm = new FormData(form);
        if (dataForm.get('type_user') == 1){
            const data = JSON.stringify({id_student : dataForm.get('matricula')});
            var headers = new Headers();
            
            headers.append('Accept', 'application/json'); 
            headers.append('Content-Type', 'application/json')
           
            fetch('/api/students/login', {    method: 'post',
            headers: headers,
            body: data})
            .then(data =>{
                
                
                if (data.status == 200){
                    data.json().then(data =>{
                        localStorage.setItem('student', data.data);
                        window.location.href = '#/student';

                    });

                }else{
                    data.json().then(data =>{
                        if (document.getElementById('incorrect') == null){
                            let node = document.getElementById('matricula')
                            .insertAdjacentHTML('beforebegin', `<div class="alert alert-danger" id="incorrect" role="alert">
                            <strong style="color: red;">${data.message}
                          </div>`);
                        }

                    });
                }
            })
            .catch(message =>{
                console.log('Hubo un problema');
            });
        }
        else if(dataForm.get('type_user') == 2){
            window.location.href = '#/teacher';
        }
    }
}

//Routs 
    _$.getId('content')
    .setRout('/', 'templates/index.html',null, login, ()=>{
        
    })
    .setRout('/student', 'templates/login/student.html','root-target', null, null)
    .setRout('/teacher', 'templates/login/teacher.html',null, null, null);
})(window, document)