alert("Hello world!");
let numeroMaximo = 10;
let numeroSecreto = Math.floor(Math.random()*numeroMaximo)+1;
let numeroUsuario = 0;
let intentos = 1 ;
//let palabraIntentos = "intento";
let maximosIntentos = 3;
console.log(numeroSecreto);
while(numeroUsuario != numeroSecreto){
    //parseInt convierte a numero el string que recibe del prompt
    numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${numeroMaximo} por favor:`));
    console.log(typeof(numeroUsuario));
    if (numeroUsuario == numeroSecreto) {
        //se cumple la condicion
        // con template literals `` y encerrando la variable con ${} podemos mostrar el valor de la variable en el texto 
        //los template literals, tambien se pueden usar para ingresar codigo
        alert(`Acertaste el numero de la suerte es ${numeroSecreto}. Lo lograste en ${intentos} ${intentos == 1 ? "intento" : "intentos"}.`);
    } else {
        if (numeroUsuario > numeroSecreto){
            alert("El numero secreto es menor");
        } else {
            alert("El numero secreto es mayor");
        }
        //incrementamos el valor de intentos
        //intentos = intentos + 1;
        //intentos += 1;
        intentos++;
        //palabraIntentos = "intentos";
        //se corta el ciclo cuando se llega al numero de maximos intentos
        if (intentos > maximosIntentos){
            alert(`Has alcanzado el número máximo de ${maximosIntentos} intentos, el numero secreto era ${numeroSecreto}`);
            break;
        }
        //no se cumple la condicion 
    }
}

