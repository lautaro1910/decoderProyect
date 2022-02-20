
//funcion validar
var varAux = true;
function validar(string){
    var regExp = /^[a-z0-9\s]+$/;
    if(!regExp.test(string)){
      string = "";
      varAux = false;
      window.location.reload();
    }
}

//error mensaje
function errorMensaje() {
    var error = document.getElementById("errorMensaje");
    error.textContent = "Se ha producido un error. Ha ingresado un carácter inválido.";
}