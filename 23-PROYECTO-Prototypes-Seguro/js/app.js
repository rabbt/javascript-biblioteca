//constructores 
function Seguro(marca, year, tipo){
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;   
}

function UI(){}
    //Llena las opciones de los años
UI.prototype.llenarOpciones = () => {
        
    const max = new Date().getFullYear(),
        min = max - 20;

    const selectYear = document.querySelector('#year');

    for(let i = max; i > min; i--){
        let option = document.createElement('option');
        option.textContent = i;
        selectYear.appendChild(option)
    }
}

//muestra alertas en pantalla
UI.prototype.mostrarMensaje = function(){
    
}

//instanciar UI
const ui = new UI();

//console.log(ui);

document.addEventListener('DOMContentLoaded',() => {
    //llena las opciones de los años
    ui.llenarOpciones(); //llenar el select con los años
})

//validarformulario
eventListener()

function eventListener(){
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit', cotizarSeguro);
}

function cotizarSeguro(e){
    e.preventDefault();

    //leer la marca seleccionada
    const marca = document.querySelector('#marca').value;

    //leer el año seleccionado
    const year = document.querySelector('#year').value;


    //leer el tipo de cobertura
    const tipo = document.querySelector('input[name="tipo"]:checked').value //selector de css
    
    if(marca === '' || year === '' || tipo === ''){
        console.log('no paso la validacion');
    }else{
        console.log('paso la validacion');
    }
}