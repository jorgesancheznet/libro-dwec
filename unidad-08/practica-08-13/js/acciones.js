var temp = null;//control de tiempo
const GRAVEDAD = .6;
const INTERVALO = 100;
//dimensiones del helicoptero
const HWIDTH = 120;
const HHEIGHT = 51;
//margen de conflicto
const MARGEN_CHOQUE_TORRE = 60;
//margen para posar
const MARGEN_POSAR = 10;
const MAX_VELOCIDAD_POSAR = -10;

//objeto que representa al helicóptero
var helicoptero = {
    parado: true,
    velocidadY: 0,
    velocidadH: 0,
    capa: null
}

/**
 * Muestra el choque
 */
function boom() {
    clearInterval(temp);
    document.getElementById("helicoptero").style.backgroundImage = "url(img/boom.png)";
}

/**
 * Determina si el helicóptero se ha estrellado
 */
function comprobarColision() {
    let hTop = helicoptero.capa.offsetTop;
    let hLeft = helicoptero.capa.offsetLeft;
    let wHeight = window.innerHeight;
    let wWidth = window.innerWidth;

    //choque por abajo
    if (hTop + (HHEIGHT / 2) > wHeight) {
        //para elevar el cartel con el "Boom"
        helicoptero.capa.style.top = (wHeight - HHEIGHT)+"px";
        boom()
    }
    //colisión arriba
    else if (hTop < -(HHEIGHT / 2)) {
        helicoptero.capa.style.top = 0;
        boom()
    }
    //colision izquierda
    else if (hLeft < -(HWIDTH / 2)) {
        helicoptero.capa.style.left = 0;
        boom()
    }
    //colision derecha
    else if (hLeft > wWidth - (HWIDTH / 2)) {
        helicoptero.capa.style.left = (wWidth - HWIDTH)+"px";
        boom()
    } else
        comprobarTorre();
}


/**
 * Determina si el helicóptero ha aterrizado o se ha
 * estrellado contra la torre
 */
function comprobarTorre() {
    let hTop = helicoptero.capa.offsetTop;
    let hLeft = helicoptero.capa.offsetLeft;
    let hBottom = hTop + HHEIGHT;
    let hRight = hLeft + HWIDTH;
    //coordenadas plataforma
    let plataforma = document.getElementById("plataforma");
    let pTop = plataforma.offsetTop;
    let pLeft = plataforma.offsetLeft;
    let pWidth = plataforma.clientWidth;
    let pHeight = plataforma.clientHeight;
    let pRight = pLeft + pWidth;
    let pBottom = pTop + pHeight;


    //console.log("+++" + "hR" + hRight + ",hT" + hTop + "hL" + hLeft + ",hB" + hBottom + ",pL" + pLeft + ",pR" + pRight + ",pT" + pTop + ",pB" + pBottom);

    //comprobar si posa
    if (hRight > pLeft + MARGEN_POSAR && hRight < pRight + MARGEN_POSAR && hBottom < pTop + MARGEN_POSAR && hBottom > pTop - MARGEN_POSAR &&
        helicoptero.velocidadY > MAX_VELOCIDAD_POSAR) {
        helicoptero.capa.style.top = (pTop - HHEIGHT + 10)+"px";
        clearInterval(temp);
        conseguido();
    }
    //comprobar choque
    else if (hRight - MARGEN_CHOQUE_TORRE > pLeft && hLeft + MARGEN_CHOQUE_TORRE < pRight &&
        hTop + MARGEN_CHOQUE_TORRE > pTop) {
        helicoptero.capa.style.zIndex = 1000;
        boom();
    }
}

/**
 *
 */
function dibujarMarcador() {
    //redondeo de las velocidades
    let vh = parseInt(helicoptero.velocidadH * 100 + .5) / 100;
    let vv = parseInt(helicoptero.velocidadY * 100 + .5) / 100;
    //capas a actualizar
    let flechaH = document.getElementById("flechaH");
    let flechaV = document.getElementById("flechaV");
    let velocidadH = document.getElementById("velocidadH");
    let velocidadV = document.getElementById("velocidadV");
    if (vh > 0) {
        flechaH.innerHtml = "&rarr;";
        velocidadH.textContent = vh;
    } else if (vh < 0) {
        flechaH.innerHtml = "&larr;";
        velocidadH.textContent = vh;
    } else {
        velocidadH.innerText = 0;
    }

    if (vv > 0) {
        flechaV.innerHtml = "&uarr;";
        velocidadV.textContent = vv;
    } else if (vv < 0) {
        flechaV.innerHtml = "&darr;";
        velocidadV.textContent = vv;
        if (vv < MAX_VELOCIDAD_POSAR) {
            velocidadV.style.color = "red";
        } else {
            velocidadV.style.color = "yellow";
        }
    } else {
        velocidadV.textContent = 0;
    }
}

/**
 * Se encarga de hacer las acciones pertinentes cuando el
 * helicóptero consigue posar
 */
function conseguido() {
    document.getElementById("bravo").style.display = "block";
}

/**
 * Temporizador
 * @type {number} Temporizador
 */
temp = setInterval(function () {
    dibujarMarcador();
    console.log(helicoptero.capa.offsetTop);
    if (helicoptero.capa != null) {
        if (!helicoptero.parado) {
            helicoptero.capa.style.left =
                (helicoptero.capa.offsetLeft + helicoptero.velocidadH)+"px";
            helicoptero.capa.style.top = (helicoptero.capa.offsetTop - helicoptero.velocidadY)+"px";
            helicoptero.velocidadY -= GRAVEDAD;
        }
    }
    if (!helicoptero.parado) {
        comprobarColision();
    }

    //console.log("VH " + helicoptero.velocidadH + ", " +
    //    "VY " + helicoptero.velocidadY + ", " +
     //   "top " + helicoptero.capa.ºop + ", " +
      //  "left " + helicoptero.capa.offsetLeft
    //)
}, INTERVALO);


/**
 * Código que se ejecuta al inicio
 */
window.addEventListener("DOMContentLoaded", (e) => {
    helicoptero.capa = document.getElementById("helicoptero");

    /**
     * Control de teclas
     */
    document.body.addEventListener("keydown", function (e) {
        if (e.key === "ArrowUp") {
            if (helicoptero.parado) {
                helicoptero.parado = false;
            }
            helicoptero.velocidadY++;
        } else if (e.key === "ArrowDown") {
            if (!helicoptero.parado) {
                helicoptero.velocidadY--;
            }
        }
        if (e.key === "ArrowLeft") {
            if (!helicoptero.parado) {
                helicoptero.velocidadH--;
            }
        } else if (e.key === "ArrowRight") {
            if (!helicoptero.parado) {
                helicoptero.velocidadH++;
            }
        }
        if (e.key === " ") {
            clearInterval(temp);
        }
    })


});
