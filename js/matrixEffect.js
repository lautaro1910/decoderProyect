
//obtengo el canvas
const canvasMatrix = document.getElementById("canvasMatrix");
const pincel = canvasMatrix.getContext("2d");

//ancho y largo del canvas
const w = canvasMatrix.width = document.body.offsetWidth;
const h = canvasMatrix.height = document.body.offsetHeight;

//rectangulo negro
pincel.fillStyle = '#fff';
pincel.fillRect(0, 0, w, h);


//columnas de letras que caen
const col = Math.floor(w/20) + 1;
const posY = Array(col).fill(0);  //inicialmente cada columna empieza en cero


function matrixEffect () {
    //rectangulo semitransparente tope
    pincel.fillStyle = '#fff1';
    pincel.fillRect(0, 0, w, h);

    // color de fuente verde y 15pt
    pincel.fillStyle = '#F84E29';
    pincel.font = '15pt monospace';

    //para cada columna, pongo un caracter random al final
    posY.forEach((y, ind) => {
        //genera un caracter random
        const textRandom = String.fromCharCode(Math.random() * 128);

        //coordenada x
        const x = ind * 20;

        //colocar el caracter en (x, y)
        pincel.fillText(textRandom, x, y);

        //Aleatoriamente resetear el final de la columna si tiene al menos 100 px high
        if (y > 100 + Math.random() * 10000) posY[ind] = 0;
        // otherwise just move the y coordinate for the column 20px down,
        else posY[ind] = y + 20;
    });
}

//ejecutar la animacion
setInterval(matrixEffect, 50);


