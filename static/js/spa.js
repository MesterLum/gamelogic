(function(window, document){

const lib = function(){
    var element = null,
    routs = [],
    controller;

    const SPA = {

        getId : function(id){
            element = document.getElementById(id);
            return this;
        },
        getElement : function(){
            return element;
        },
        setRout : function(rout, template,controller, action){
            routs[rout] = {
                template : template,
                action : action,
                controller : controller
            }
            
            return this;
        },
        getController : function(){
            return controller;
        },
        noSubmit : function(){
            element.addEventListener('submit', e =>{
                e.preventDefault();
            });
        },
        managerRout : function(){
           const hash = window.location.hash.substring(1) || '/';
           if (routs[hash] && routs[hash].template){
               fetch(routs[hash].template)
               .then(data =>{
                   return data.text();
               })
               .then(data =>{
                    element.innerHTML = data;
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