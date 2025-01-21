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

/* 
Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.


function calcularImc (){
  let peso =  parseFloat(prompt("Ingresa tu peso en kilogramos"));
  let altura = parseFloat(prompt("Ingresa tu altura en metros"));
  let imc = peso / (altura * altura);
  return alert(`Según tu peso de ${peso} kg y altura de ${altura}m, tu IMC es ${imc.toFixed(2)}`);
}
calcularImc();

*/
/* Crea una función que calcule el valor del factorial de un número pasado como parámetro.

function calcularFactorial(numero) {
  if (numero < 0) {
    return "El factorial no está definido para números negativos.";
  }
  if (numero === 0 || numero === 1) {
    return 1;
  }
  let factorial = 1;
  for (let i = 2; i <= numero; i++) {
    factorial *= i;
  }
  return factorial;
}

let numero = parseInt(prompt("Ingresa un número para calcular su factorial:"));
let resultado = calcularFactorial(numero);
alert(`El factorial de ${numero} es ${resultado}.`);

 */
/* 
Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

function multilplicaciones(numero){
let tablas = `Tabla de multiplicar del número ${numero}: \n`;
  for (let i = 1; i < 11; i++) {
  tablas += `${numero} x ${i} = ${numero * i}\n`;
}
alert(tablas);
}
let numero = parseInt(prompt("¿Qué número deseas multiplicar?"));
multilplicaciones(numero);
*/
/* Crea una lista vacía llamada "listaGenerica".

let listaGenerica = [];
*/
/* Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.

let lenguajesDeProgramacion = ["JavaScript", "C", "C++", "Kotlin", "Python"];

Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.

lenguajesDeProgramacion.push("Java", "Ruby", "GoLang");

Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.

function imprimirLenguajes() {
  console.log(lenguajesDeProgramacion);
}
imprimirLenguajes();

Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso. 
function lenguajesInverso(lenguajesDeProgramacion) {
  for (let i = lenguajesDeProgramacion.length - 1; i >= 0; i--) {
    console.log(lenguajesDeProgramacion[i]);
  }
}
lenguajesInverso(lenguajesDeProgramacion);

Crea una función que calcule el promedio de los elementos en una lista de números. 
let calificaciones = [10, 8, 7, 9, 10, 8];
console.log(calificaciones);
function promediar(numeros) {
  let suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
  let promedio = suma / numeros.length;
  return promedio;
}
console.log(promediar(calificaciones).toFixed(1));
Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista. 
function mayorYMenor(calificaciones) {
  let mayor = Math.max(...calificaciones);
  let menor = Math.min(...calificaciones);
  return console.log(`El número mayor es ${mayor} y el menor es ${menor}`);
}
mayorYMenor(calificaciones);

Crea una función que devuelva la suma de todos los elementos en una lista.

function sumando (calificaciones){
let suma = calificaciones.reduce((acumulador, numero) => acumulador + numero, 0);
return console.log(`La suma de ${calificaciones} es ${suma}`);
}
sumando(calificaciones);

*/
// =========== METODO REDUCE ==================
/* 
El método reduce en JavaScript se utiliza para iterar sobre los elementos de un arreglo y reducirlos a un único valor. Puede ser una suma, producto, concatenación o cualquier otra operación que combine elementos de una lista.

const numeros = [1, 2, 3, 4, 5];
const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
console.log(suma); // 15

///////////////////////////////////////////////////////////
const palabras = ["Hola", "mundo", "desde", "reduce"];
const frase = palabras.reduce((acumulador, palabra) => acumulador + " " + palabra, "");
console.log(frase); // "Hola mundo desde reduce"

Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.

function encontrarPosicion (lista, elemento){
  // indexOf para encontrar la posicion
  let posicion = lista.indexOf(elemento);
  return posicion;
}
let numeritos = [10, 20, 30, 40, 50];
let elementoPerdido = 30;
let posicion = encontrarPosicion(numeritos, elementoPerdido);
if (posicion !== -1){
  console.log(`El elemento ${elementoPerdido} se encuentra en la posición ${posicion}`);
} else {
  console.log(`El elemento ${elementoPerdido} no esta en la lista`);
}

*/
/* Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno. 
function listas(lista1, lista2) {
  // Verificar que ambas listas tengan el mismo tamaño
  if (lista1.length !== lista2.length) {
    console.log("Las listas no tienen el mismo tamaño.");
    return;
  }
  // Crear un nuevo arreglo con la suma de los elementos correspondientes
  let resultado = [];
  for (let i = 0; i < lista1.length; i++) {
    resultado.push(lista1[i] + lista2[i]); // Puedes cambiar la operación aquí
  }
  return resultado;
}
// Ejemplo de uso
const lista1 = [1, 2, 3, 4];
const lista2 = [5, 6, 7, 8];

const resultado = listas(lista1, lista2);
console.log("Resultado de la operación:", resultado);


Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.

function listaAlCuadrado(listaDNumeros){
  //arreglo nuevo con los resultados de cada elemento al cuadrado
let resultadoCuadrado = listaDNumeros.map(numero => numero * numero);
//console.log
resultadoCuadrado.forEach((cuadrado, index) => {
  console.log(`El cuadrado de ${listaDNumeros[index]} es ${cuadrado}`);
});
return resultadoCuadrado;
}
const listaDNumeros = [5, 6, 7, 8];
//llamando funcion y almacenando resultado
let resultadoCuadrado = listaAlCuadrado(listaDNumeros);
console.log("Lista de los cuadrados: ", resultadoCuadrado);
*/