/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

var textoDeEntrada = document.getElementById("inputTextoA");
var mensajeCodificado = document.getElementById("mensajeAMostrar");


//encriptador
function encriptarTexto() {
    var textoAcodificar = textoDeEntrada.value;
    //textoAcodificar = textoAcodificar.toLowerCase();
    var textoMomentaneo = textoAcodificar.replace(/e/g, "enter")
                                         .replace(/i/g, "imes")
                                         .replace(/a/g, "ai")                                                                                    
                                         .replace(/o/g, "ober")
                                         .replace(/u/g, "ufat");
    var textoCodificado = textoMomentaneo;
    return textoCodificado;
}