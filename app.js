let numeroSecreto;
let intentos;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento (elemento, texto) {
    let elelentoHTML = document.querySelector(elemento);
    elelentoHTML.innerHTML= texto;
    return;
}

function condicionesIniciales() {
    asignarTextoElemento("h1" , "Juego del número secreto");
    asignarTextoElemento("p" , `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    }

function verificarIntento (){
    numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    //console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p", `Acertaste el número en ${intentos} ${(intentos === 1)? "intento" : "intentos"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }
    else{
        //El usuario no acerto.
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento ("p" , "El número secreto es menor");
        }
        else {
            asignarTextoElemento ("p" , "El número secreto es mayor");  
        }
        intentos++;
        limpiarCaja();
        }
    return;
    }

function limpiarCaja() {
   document.querySelector("#valorUsuario").value = "";
}


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor (Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
//preguntar si ya se sortearon todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento("p", "Ya se sortearon todos los numeros posibles");
    }
    else{
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }}
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje para ingresar numero
    //generar numero aleatorio
    //reiniciar numero de intento
    condicionesIniciales();
    //desablitar boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
}
condicionesIniciales();
