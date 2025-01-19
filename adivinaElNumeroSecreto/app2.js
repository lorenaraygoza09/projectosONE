/* alert("¡Bienvenida y bienvenido a nuestro sitio web!");
let nombre = "Lua";
let edad = 25;
let numeroDeVentas = 50;
let saldoDisponible = 1000;
let mensajeDeError =  "¡Error! Completa todos los campos";
alert(mensajeDeError);
let nombreUsuario = prompt("¿Cual es tu nombre");
nombre = nombreUsuario;
let edadUsuario = prompt("Ingresa tu edad")
edad = edadUsuario;
if (edadUsuario >= 18){
    alert("¡Puedes obtener tu licencia de conducir!")
} else {
    alert("Aun no puedes solicitar tu licencia")
} */
/* let diaDeLaSemana = prompt("¿Qué dia de la semana es hoy?")
if (diaDeLaSemana == "sabado" || diaDeLaSemana == "domingo"){
    alert("Buen fin de semana!");
} else {
    alert("Buena semana!");
}

let numeroUsuario = prompt("Ingresa un numero");
if (numeroUsuario > 0){
    alert(`El numero ${numeroUsuario} es positivo`)
} else {
    alert(`El numero ${numeroUsuario} es negativo`)
}

let puntuacion = prompt("Ingresa la puntuacion obtenida");
if (puntuacion >= 100){
    alert("Felicidades, has ganado!");
} else {
    alert("Sigue intentando!")
}

let saldoDisponible = 850;
alert(`Tu saldo disponible es de $${saldoDisponible}`)
let nombreUsuario = prompt("Ingresa tu nombre");
alert(`Hola, ${nombreUsuario}! Bienvenida de vuelta!`) */

/*
==== Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número. =====
let contador = 1;
while(contador < 11){
    console.log(contador);
    contador++;
}
=== Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número. ===

let contador2 = 10;
while (contador2 > -1){
    console.log(contador2);
    contador2--;
} */
/* 
=== Crea un programa de cuenta regresiva. Pide un número y cuenta desde ese numero hasta 0 utilizando un bucle 'while' en la consola del navegador ===

let cuentaRegresiva = prompt("Ingresa un numero");
    cuentaRegresiva = Number(cuentaRegresiva);//convierte cuentaRegresiva en un numero
    if (isNaN(cuentaRegresiva) || cuentaRegresiva < 0){
        console.log("Ingresa un numero mayor a 0")
    } else {
        let contador = cuentaRegresiva;
        while (contador >= 0){
            console.log(contador);
            contador--;
        }
    }
*/
/* 
==== Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador. ====

let cuentaProgresiva = prompt("Ingresa un numero");
    cuentaProgresiva = Number(cuentaProgresiva);//convierte cuentaProgresiva en un numero
    if (isNaN(cuentaProgresiva) || cuentaProgresiva < 0){
        console.log("Ingresa un numero mayor a 0")
    } else {
        let contador2 = 0;
        while (contador2 <= cuentaProgresiva){
            console.log(contador2);
            contador2++;
        }
    }
*/
/* Crea un programa que utilice console.log para mostrar un mensaje de bienvenida. 

let nombre = "Lorena"
console.log("Hola " + nombre +  " bienvenida a la consola!");
*/
/* Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador. 

alert(`Hola ${nombre}, bienvenida!`);
Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".
*/

/* Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.

let lenguaje = prompt("¿Cuál es el lenguaje de programación que más te gusta?");
console.log(lenguaje);
*/

/* 
Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.

let valor1 = 3;
let valor2 = 5;
let resultado= valor1 + valor2;
console.log("La suma de " + valor1 + " + " + valor2 + " es igual a " + resultado);
*/

/* 
Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.

let resta = valor2 - valor1;
console.log("La diferencia de " + valor2 + " - " + valor1 + " es igual a " + resta);
*/

/* 
Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.

let edadUsuario =  prompt("Ingresa tu edad");
if(edadUsuario < 18){
    alert("menor de edad");
} else {
    alert("mayor de edad");
}
*/

/* 
Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.

let numero = prompt("ingresa un numero");
if (numero < 0){
    console.log("numero negativo");
} else if (numero == 0){
console.log("numero 0")
} else {
    console.log("numero positivo")
}
*/

/* 
Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.
let numero = 1
while (numero < 11) {
    console.log(numero)
    numero++;
}
*/

/* 
Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.

let nota = 8;
if (nota >= 7){
    console.log("Aprobado");
} else {
    console.log("Reprobado");
}
*/

/* 
Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.

let numeroAleatorio = Math.random();
console.log(numeroAleatorio);
*/
/* 
Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.

let numero1a10 = parseInt(Math.random() * 10 + 1);
console.log(numero1a10);
*/

/* Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.

let numero1a1000 = parseInt(Math.random() * 1000 + 1);
console.log(numero1a1000);
 */
