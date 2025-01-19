let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora del desafío";
//crear funcion para cuando se haga click en el boton de consola y envia un mensaje en ella
function consola(){
    console.log("Click desde el botón");
    }
//funcion que pide un parametro y regresa un alert con ese parametro
function ingresarCiudad(){
    let ciudad = prompt("Ingresa tu ciudad favorita");
    alert(`Estuve en ${ciudad} y me acordé de ti, te quiero 💖`)
}
//funcion que al hacer click devuelve un alert
function alerta(){
alert("Amo JS");
}
//funcion de suma que pide los parametros al usuario y devuelve un alert con el resultado
function suma(){
    let a = Number(prompt("Ingresa 1 numero"));
    let b = Number(prompt("Ingresa otro número"));
    return alert(`La suma de ${a} + ${b} es ${a + b}`);
}