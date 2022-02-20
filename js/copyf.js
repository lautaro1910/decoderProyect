
//funcion copiar
function copy(){
    var copyText = document.getElementById("mensajeAMostrar");
    copyText.select();
    document.execCommand("copy");
}