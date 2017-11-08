(function(window, document){
'use strict'
const index = function(){
    var errorLogin = false;
    document.getElementById('login').addEventListener('submit', (e)=>{
        e.preventDefault();
        var formData = new FormData(document.getElementById('login'));
        var header = new Headers();
        header.append('Accept', 'application/json');
        header.append('Content-Type', 'application/json');
        fetch('/api/students/login', {headers : header ,method : 'POST', body : JSON.stringify({id_student : formData.get('id_student'), nip : formData.get('nip')})})
        .then(data =>{
            if (data.status == 200){
                data.json().then(response =>{
                    
                    localStorage.setItem('student', response.student);
                    window.location = '#/student';
                    
                });
            }else if (data.status == 202){
                data.json().then(response =>{
                    if (!errorLogin){
                        
                        document.getElementById('id_student').insertAdjacentHTML('beforebegin', `<div class="bg-danger text-white text-center">${response.info.message}</div>`);
                        errorLogin=true;
                    }
                    
                })
            }
        })
        .catch(data =>{
            console.log(data);
        });
    });
}
    _$.setRout({
        rout : '/',
        template : '/templates/login.html',
        action : index,
        protected : false
    })
    .setRout({
        rout : '/student',
        template : '/templates/student/index.html',
        protected : true,
        action : function(){
            libgamelogic.refreshTable();
            libgamelogic.getLevel(libgamelogic.preparedLevel);
            initializeElements();
            
        }
    })
    

})(window, document)

