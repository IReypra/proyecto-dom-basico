'use strict'
window.onload = cambiarTexto;

// Grupo 2: Cambiar el texto de la caja
// Archivo: modulos/texto.js
console.log("Módulo de color cargado");

// Creo un array de opciones para cambiar el texto
let misOpciones = ['¡Hola!', '¿Cómo estás?', 'Aprendiendo DOM']
// Creo un índice que empiece en 0 para luego cambiar al siguiente
let indice = 0;

function cambiarTexto(){
    // Capturo el div que contiene el texto de la caja ¡Hola!
    let miTexto = document.getElementById("miCaja");
    // Capturo el botón cambiarTexto
    let botonCambiarTexto = document.getElementById("btnTexto");
    // Le añado el evento click
    botonCambiarTexto.addEventListener("click", (ev)=>{
        //  Hago un console para comprobar que funciona el click
        console.log("Has hecho click.");
        // Modifico el valor del índice para pasar a la siguiente opción
        indice = (indice + 1) % misOpciones.length;
        // Cambio el texto de la caja usando el array misOpciones
        miTexto.textContent = misOpciones[indice];
        // Hago un console cada vez que se cambia el texto
        console.log("Has cambiado el texto.");
    })
}

// Me falta hacer el import de caja y export de funcion
