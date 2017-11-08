(function(window,document){
'use strict'

    const lib = function(){
        var token = localStorage.token,
            routApi = null,
            executeAfterLogin = null;
        const login = {

            setToken : function(tokenRef){
                token = tokenRef;
                return this;
            },
            setApi : function(api){
                routApi = api;
                return this;
            },
            setExecute : function(execute){
                executeAfterLogin = execute;
                
            },
            ensureAuth : function(){
                routApi = 'isLogin';
                var headers = new Headers();
                headers.append('Authorization', `Bearer ${token}`);
                fetch('/profile/student/isLogin', {method : 'POST'})
                .then(response =>{

                    if (response.status == 200){
                        response.json().then(response =>{
                            console.log('wasa');
                        })
                    }
                    if (response.status == 500){
                        response.json().then(response =>{
                            console.log(response);
                        });
                    }
                    if (response.status == 403){
                        console.log('hubo un problema');
                    }

                });

            }

        }
        return login;
    }

if (typeof window.spa_login === 'undefined'){
    window.login_spa = window._$login = lib();
}

})(window,document)