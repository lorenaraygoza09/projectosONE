let numeroSecreto = generarNumeroSecreto();

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
console.log(typeof (numeroUsuario));
console.log(numeroUsuario);
console.log(numeroSecreto);
console.log(numeroUsuario === numeroSecreto);
}


function generarNumeroSecreto() {
    let numeroSecreto = Math.floor(Math.random()*10) + 1;
    return numeroSecreto;
}


asignarTextoElemento('h1', "Numero secreto");
asignarTextoElemento('p', "Ingresa un numero del 1 al 10");



