function initializeElements(){

    var elements = {
            element : [{
                tag : 'Entrada',
                id : 'entrada'
            },
            {
                tag : 'Salida',
                id : 'salida'
            },
            {
                tag : 'Copiar de',
                id : 'copiar-de'
            },
            {
                tag : 'Copiar a',
                id : 'copiar-a'
            },
            {
                tag : 'Sumar 1',
                id : 'sumar-1'
            },
            {
                tag : 'Restar 1',
                id : 'restar-1'
            },
            {
                tag : 'Saltar si es -',
                id : 'saltar-si-es-negativo'
            },
            {
                tag : 'Saltar si es 0',
                id : 'saltar-si-es-0'
            },
            {
                tag : 'Saltar a',
                id : 'saltar-a'
            }
        ]
    }

    elements.element.map(obj =>{
        
        document.getElementById('elementsDrag').innerHTML = document.getElementById('elementsDrag').innerHTML + `<div draggable="true" class="float-left operations" id="${obj.id}">${obj.tag}</div>`;
        
    });

    const handleDragStart = function(e){
        this.style.opacity = '0.4';
        e.dataTransfer.setData('t', 'perro');
        
    }



    var elementsEvent = document.querySelectorAll(`.operations`);
    [].forEach.call(elementsEvent, ele =>{
        ele.addEventListener('dragstart', handleDragStart);
        
    });

    const handleDragEnter = function(e){
        e.preventDefault();
        this.classList.remove('borderEjecucion');
        this.classList.add('dragEnter');
        console.log(e.dataTransfer.getData('Data'));
    }
    const handleDragLeave = function(e){
        this.classList.remove('dragEnter');
        this.classList.add('borderEjecucion');
        console.log(e.dataTransfer.getData('Data'));
    }
    document.getElementById('ejecucion').addEventListener('dragenter', handleDragEnter);
    document.getElementById('ejecucion').addEventListener('dragleave', handleDragLeave);


}

