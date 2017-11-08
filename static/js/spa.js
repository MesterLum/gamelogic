(function(window, document){

const lib = function(){
    var element = document.getElementById('root-target'),
    routs = [],
    target = null,
    controller;

    const SPA = {

        getId : function(id){
            element = document.getElementById(id);
            return this;
        },
        getElement : function(){
            return element;
        },
        setRout : function(params){
            routs[params.rout] = {
                template : params.template,
                action : params.action,
                controller : params.controller,
                target : params.target,
                preload : params.preload,
                protected : params.protected
            }
            
            return this;
        },
        getRouts : function(){
            return routs;
        },
        getController : function(){
            return controller;
        },
        noSubmit : function(){
            element.addEventListener('submit', e =>{
                e.preventDefault();
            });
        },
        ensureAuth : function(){
            
            var headers = new Headers();
            headers.append('Authorization', `Bearer ${localStorage.student}`);
            
            fetch('/profile/student/isLogin', {method : 'POST', headers : headers})
            .then(response =>{

                if (response.status == 200){
                    response.json().then(response =>{
                        //Hubo login
                    })
                }
                if (response.status == 500){
                    response.json().then(response =>{
                        
                        window.location = '/';
                    });
                }
                if (response.status == 403){
                    
                    window.location = '/';
                }

            })
            .catch(response =>{
                window.location = '/';
            })

        },
        managerRout : function(){
           const hash = window.location.hash.substring(1) || '/';
           if (routs[hash] && routs[hash].template){
               fetch(routs[hash].template)
                .then(data =>{
                   return data.text();
               })
               .then(data =>{
                   if (routs[hash].protected)
                        _$.ensureAuth();
                    if (typeof routs[hash].preload === 'function')
                         routs[hash].preload();
                    if (routs[hash].target){
                        let target = document.getElementById(routs[hash].target);
                        if (target != null)
                            target.innerHTML = data;
                        else
                            alert('No se encontro la etiqueta que especifica');
                    }
                        
                    else
                        document.getElementById('root-target').innerHTML = data;
                    if (typeof routs[hash].action == 'function'){
                        routs[hash].action();
                    }
                    if (routs[hash].controller){
                        
                        controller = routs[hash].controller;
                        
                    }
               });
           }else{
               window.location = '/';
           }
        }
    }
    return SPA;
}

if (typeof window.lib_spa === 'undefined'){
    window.lib_spa = window._$ = lib();
    window.addEventListener('load', _$.managerRout);
    window.addEventListener('hashchange', _$.managerRout);
}

})(window, document)