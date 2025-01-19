/* 
Crear una función que muestre "¡Hola, mundo!" en la consola.

function holaMundo(){
console.log("Hola Mundo");
}
holaMundo(); 
*/

/* 
Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.


function saludoConsola(){
let nombre = prompt("Ingresa tu nombre");
console.log(`Hola, ${nombre}!`);
return;
}
saludoConsola(); 

*/

/* 
Crear una función que reciba un número como parámetro y devuelva el doble de ese número.

function doble(){
    let numero = prompt("Ingresa un numero");
    alert(`El doble de ${numero} es ${numero * 2}`);
 }
doble(); 

*/
/*
Crear una función que reciba tres números como parámetros y devuelva su promedio.

function calcularPromedio(a, b, c) {
  return parseInt((a + b + c) / 3);
}
console.log(calcularPromedio(8, 10, 10));
calcularPromedio(); 

*/

/* 
Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.

function numeroMayor(a, b) {
    //le añadi parseInt para que los conviertiera a numero 
  a = parseInt(prompt("Ingresa un numero"));
  b = parseInt(prompt("Ingresa otro numero"));
  if (a > b) {
    alert(`El número mayor es ${a}`);
  } else {
    alert(`El número mayor es ${b}`);
  }
}
numeroMayor();

*/
/* 
Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.

function potencia(n){
    n = parseInt(prompt("Ingresa un numero"));
    alert(`La potencia de ${n} es ${n * n}`);
}
potencia();

*/