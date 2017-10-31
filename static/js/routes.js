function setLevel(){
    var targetIn = document.getElementById('entrada'),
    inn = $$.getLevel();
    var inHTML = ``;
    console.log($$.getIn());
    /*inn.map(i =>{
        inHTML+=`<button class="btn btn-primary" value=${i}>${i}</button>`;
    });*/
    //targetIn.innerHTML = inHTML;
}

(function(window, document){
'use strict'

    _$.getId('root-target')
    .setRout('/', '/templates/student/index.html', 'root-target', null, setLevel());

})(window, document)