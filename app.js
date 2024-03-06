/*let titulo=document.querySelector('h1');
titulo.innerHTML='El juego del número secreto';

let parrafo=document.querySelector('p');
parrafo.innerHTML='Elige un número del 1 al 10';*/

let numeroSecreto = 0;
let intentos=0;
//console.log(numeroSecreto);
let listaNumerosSorteados=[];
let numeroMaximo=10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML=document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
}

function verificarIntento(){
    let numeroDeUsuario=parseInt(document.getElementById('valorUsuario').value);
    /*console.log(intentos);
    console.log(typeof(numeroDeUsuario));
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(numeroDeUsuario);
    console.log(numeroDeUsuario==numeroSecreto);*/
    if (numeroDeUsuario===numeroSecreto){
        asignarTextoElemento('p', `Felicidades.Acertaste el número en ${intentos} ${(intentos===1)?'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //El usuario no acertó
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor');
        }else{
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Este es el juego del número secreto');
    asignarTextoElemento('p',`Elige un número entre 1 y ${numeroMaximo}, por favor`);
    numeroSecreto = GenerarNumeroSecreto();
    intentos=1;
}

function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo de números
    //generar el número aleatorio
    //iniciar el número de intentos
    condicionesIniciales();
    //deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();


function GenerarNumeroSecreto() {
    //return Math.floor(Math.random() * 10) + 1;
    let numeroGenerado=Math.floor(Math.random() * numeroMaximo) + 1;
    //si el número generado está incluido en la lista
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los números
    if(listaNumerosSorteados.length==numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else{
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return GenerarNumeroSecreto();
        } else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }
    }

  }
  
 
  