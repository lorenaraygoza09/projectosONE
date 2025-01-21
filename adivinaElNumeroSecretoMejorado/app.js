let numeroSecreto = generarNumeroSecreto();
let intentos = 1;


//Funcion para ingresar a las etiquetas del html y asignarles un texto
//declaramos la funcion con 2 elementos
function asignarTextoElemento(etiqueta, texto){
    //declaramos la variable elementoHTML y le asignamos un valor con document(ingresa al html) y el queryselector
    let elementoHTML = document.querySelector(etiqueta);
    //reasignamos el valor de etiquetas con el elemento de texto y lo imprimimos en el html con innerHTML
    elementoHTML.innerHTML = texto;
    return;
}
//crear funcion para cuando se haga click en el boton
function verificarIntento(){
    //getElementById devuelve un objeto, nosotros necesitamos el valor, por ello añadimos .value 
    //añadimos parseInt ya que estaba retornando un string y nosotros nececitamos un numero
let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
console.log(intentos);

if (numeroUsuario === numeroSecreto){
    asignarTextoElemento('p', `Acertaste el número secreto en ${intentos} ${(intentos ===1 ) ? "intento" : "intentos"}`);
    //habilita el boton de nuevo juego cuando se acierta el número
    document.getElementById('reiniciar').removeAttribute('disabled');
} else {
    if(numeroUsuario > numeroSecreto){
        asignarTextoElemento('p', "El número secreto es menor")
    } else {
        asignarTextoElemento('p', "El número secreto es mayor");
    }
    intentos++;
    limpiarCaja();
}
return;
}

function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';

}

function generarNumeroSecreto() {
    let numeroSecreto = Math.floor(Math.random()*10) + 1;
    return numeroSecreto;
}


function condicionesIniciales(){
    asignarTextoElemento('h1', "Numero secreto");
    asignarTextoElemento('p', "Ingresa un numero del 1 al 10");
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //indicar condiciones iniciales
    condicionesIniciales(); 
    //deshabilitar boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    console.log(numeroSecreto);
    
}

condicionesIniciales();
console.log(numeroSecreto);


