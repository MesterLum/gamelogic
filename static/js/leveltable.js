(function(){

    const protot = function(){
        var inn = [],
        out = [],
        description = null;
    
        const Lib = {

            refreshTable : function (){
                    
                    var headers = new Headers();
                    headers.append('Authorization', `Bearer ${localStorage.student}`);
                    fetch('/api/students/getlevels', {method : 'POST', headers : headers})
                    .then(data =>{return data.json();})
                    .then(data =>{
                        
                        var td = '';
                        data.data.map(obj =>{
                            if (obj.level == data.level)
                                td+=`<tr><td class="text-success">${obj.level}</td><td class="text-success">${obj.description}</td></tr>`;
                            else
                                td+=`<tr><td>${obj.level}</td><td>${obj.description}</td></tr>`;
                        });

                        document.getElementById('level').innerHTML = `<table class="table table-inverse"><thead><tr><th>#Level
                                </th><th>Description</th></tr></thead><tbody>${td}</tbody></table>`;
                    })
                    .catch(data =>{
                        document.getElementById('level').innerHTML = 'Hubo un error';
                    });
                
                },
            getLevel : function(cb){
                var headers = new Headers();
                headers.append('Authorization', `Bearer ${localStorage.student}`);
                fetch('/api/students/getlevel', {method : 'POST', headers : headers})
                .then(data =>{return data.json()})
                .then(data =>{
                    
                    inn = data.data.in;
                    description = data.data.description;
                    out = data.data.out;
                    cb();
                    
                });
                
            },
            preparedLevel : function(){
                //Coloco la description

                document.getElementById('description').innerHTML = `<h3>${description}</h3>`;

                //Lleno la caja ENTRADA
                var innButtons = '';
                inn.map(i =>{
                    innButtons+=`<div class="button-in bg-primary">${i}</div>`;
                }); 
                document.getElementById('in').innerHTML = innButtons;


            },
            getIn : function(){
                
                return inn;
            },
            getOut : function(){
                return out;
            },
            getDescription : function(){
                return description;
            }
        }
        return Lib;
    }

    if (typeof window.libgamelogic === 'undefined')
        window.libgamelogic = window.$$ = protot();

})(window, document)