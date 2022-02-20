
var botonEncriptar = document.getElementById("botonEncriptar");
var botonDesencriptar = document.getElementById("botonDesencriptar");
var botonCopiar = document.getElementById("botonCopy");



//funcion para mostrar el texto en la casilla
function mostrarTexto(string){
    if(string != ""){
        document.querySelector(".textOutput").value = string;
        document.querySelector(".textOutput").focus();
    }
    else{
        alert("No hay texto para mostrar");
    }
}


//textoDeEntrada.focus();
//botonEncriptar.onclick = encriptarTexto;
//botonDesencriptar.onclick = desencriptarTexto;


//boton encriptar
botonEncriptar.addEventListener('click', function(event){
    event.preventDefault();

    validar(textoDeEntrada.value);
    if(!varAux){
        mensajeCodificado.value = "";
        textoDeEntrada.value = ""; 
        //errorMensaje();
        alert("Recuerda, el texto no debe tener mayusculas, caracteres especiales o numeros");
    }
    //var errorReset = document.getElementById("errorMensaje");
    //errorReset.innerHTML = "";

    mostrarTexto(encriptarTexto());
});


//boton desencriptar
botonDesencriptar.addEventListener('click', function(event){
    event.preventDefault();

    validar(textoDeEntrada.value);
    if(!varAux){
        mensajeCodificado.value = "";
        textoDeEntrada.value = ""; 
        //errorMensaje();
        alert("Recuerda, el texto no debe tener mayusculas, caracteres especiales o numeros");
    }
    //var errorReset = document.getElementById("errorMensaje");
    //errorReset.innerHTML = "";

    mostrarTexto(desencriptarTexto());

});


//boton copiar
botonCopiar.addEventListener('click', function(event){
    event.preventDefault();

    copy();
});
