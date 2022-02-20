/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

var textoDeEntrada = document.getElementById("inputTextoA");
var mensajeCodificado = document.getElementById("mensajeAMostrar");


function desencriptarTexto() {
    var textoADesencriptar = textoDeEntrada.value;
    var textoMomentaneo = textoADesencriptar.replace(/enter/g, "e")
                                            .replace(/imes/g, "i")
                                            .replace(/ai/g, "a")                                                                                               
                                            .replace(/ober/g, "o")
                                            .replace(/ufat/g, "u");
    var textoDesencriptado = textoMomentaneo;
    return textoDesencriptado;
}