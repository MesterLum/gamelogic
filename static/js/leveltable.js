(function(){

    const protot = function(){
        var inn = [],
        out = [],
        description = null;
    
        const Lib = {

            refreshTable : function (){

                    fetch('/api/students/getlevels', {method : 'POST'})
                    .then(data =>{return data.json();})
                    .then(data =>{
                        var td = '';
                        data.data.map(obj =>{
                            td+=`<tr><td>${obj.level}</td><td>${obj.description}</td></tr>`;
                        });
                
                        document.getElementById('level').innerHTML = `<table class="table table-inverse"><thead><tr><th>#Level
                                </th><th>Description</th></tr></thead><tbody>${td}</tbody></table>`;
                    })
                    .catch(data =>{
                        document.getElementById('level').innerHTML = 'Hubo un error';
                    });
                
                },
            getLevel : function(){
                fetch('/api/students/getlevel', {method : 'POST'})
                .then(data =>{return data.json()})
                .then(data =>{
                    inn = data.data[0].in;
                    description = data.data[0].description;
                    out = data.data[0].out;
                    console.log('sali');
                    
                });
                inn = 20;
                return this;
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