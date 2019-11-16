
//función constructora
function Buscaminas(ancho, alto, nMinas) {
    const HAY_MINA = 10;
    const SIMBOLO_MINA = "&#128163;";
    //propiedades privadas
    var _ancho = ancho;
    var _alto = alto;
    var _nMinas = nMinas;
    var _tablero = null;
    var _celdasDestapadas=0;
    var _celdasSinMina=ancho*alto-nMinas;
    //validamos la corrección de los datos
    if (isNaN(Number(parseInt(ancho))) || ancho === 0)
        return null;
    if (isNaN(Number(parseInt(alto))) || alto === 0)
        return null;
    if (isNaN(Number(parseInt(nMinas))) || nMinas === 0)
        return null;
    if (ancho * alto < nMinas)
        return null;
    //almacena el contenedor del buscaminas
    this.contenedor=null;



    //************FUNCIONES PRIVADAS */

    /**
     * Inicia el array de minas
     */
    _comenzarTablero = function () {
        _tablero = new Array(_alto);
        for (let i = 0; i < _ancho; i++) {
            _tablero[i] = new Array(_ancho);
        }
        //iniciamos a cero el tablero
        for (let i = 0; i < _alto; i++) {
            for (let j = 0; j < _ancho; j++) {
                _tablero[i][j] = 0;
            }
        }
    }

    /**
     * Mira las celdas de alrededor y coloca el número de minas en 
     * la celda cuya posición se indica
     */
    _colocaNumeroCelda = function (fila, col) {
        let cont = 0;
        //solo cambiamos las celdas sin mina
        if (_tablero[fila][col] !== HAY_MINA) {
            //revisamos las ocho celdas alrededor
            if (col > 0) {
                if (fila > 0) {
                    if (_tablero[fila - 1][col - 1] === HAY_MINA)
                        cont++;
                }
                if (_tablero[fila][col - 1] === HAY_MINA)
                    cont++;
                if (fila < _tablero.length - 1) {
                    if (_tablero[fila + 1][col - 1] === HAY_MINA)
                        cont++;
                }
            }
            if (col < _tablero[fila].length) {
                if (fila > 0) {
                    if (_tablero[fila - 1][col + 1] === HAY_MINA)
                        cont++;
                }
                if (_tablero[fila][col + 1] === HAY_MINA)
                    cont++;
                if (fila < _tablero.length - 1) {
                    if (_tablero[fila + 1][col + 1] === HAY_MINA)
                        cont++;
                }
            }
            if (fila > 0) {
                if (_tablero[fila - 1][col] === HAY_MINA)
                    cont++;
            }
            if (fila < _tablero.length - 1) {
                if (_tablero[fila + 1][col] === HAY_MINA)
                    cont++;
            }
            _tablero[fila][col] = cont;
        }
    };
    /**
     * Pone los números de mina alrededor de
     * todas las celdas
     */
    _colocaNumeros = function () {
        //recorremos las celdas
        for (let i = 0; i < _alto; i++) {
            for (let j = 0; j < _ancho; j++) {
                _colocaNumeroCelda(i, j);
            }
        }
    };

    _colocaMinas = function () {
        let fila, col;
        for (let cont = 1; cont <= _nMinas; cont++) {
            //calculamos posición aleatoria para la mina
            //se repite si en la casilla ya hay una mina
            do {
                fila = parseInt(Math.random() * _alto);
                col = parseInt(Math.random() * _ancho);
            } while (_tablero[fila][col] === HAY_MINA);
            //colocamos la mina
            _tablero[fila][col] = HAY_MINA;
        }
    }

    /**
     * Muestra el contenido de la celda
     * @param {Element} celda 
     */
    function _mostrarCelda(celda,a,b){
        //solo mostramos celdas ocultas
        if(celda && celda.classList.contains("oculta")){
            celda.classList.remove("oculta");
            celda.classList.add("visible");
            //leemos coordenadas del tablero relacionadas
            //con la celda
            let i=celda.dataset.i;
            let j=celda.dataset.j;
            //fin del juego si hay una mina
            if(_tablero[i][j]===HAY_MINA){
                celda.classList.remove("oculta");
                celda.classList.add("visible");
                celda.classList.add("mina");
                _despejarTablero();
                //TODO: Fin del juego
                alert("OOOOOHH! EL juego ha finalizado. ¡Has pisado una mina!");
            }
            else if(_tablero[i][j]===0){
                _celdasDestapadas++;
                _mostrarAlrededor(celda);
            }
            else {
                _celdasDestapadas++;
                if(_celdasDestapadas===_celdasSinMina){
                    //TODO: Ganar
                    _despejarTablero();
                    alert("¡ENHORABUENA, has ganado!");
                }
            }
            let s=`[data-i='${i}'][data-j='${j}']`;
            let c=document.querySelector(s);
        }
    }

    /**
     * Permite mostrar recursivamente el contenido
     * de las celdas de alrededor que no estén ya despejadas
     * @param celda
     * @private
     */
    function _mostrarAlrededor(celda){
        let i=celda.dataset.i;
        let j=celda.dataset.j;
        let cAux; //celda auxiliar
        //simplemente invocamos a la función de mostrar celdas
        //pasando las celdas de alrededor
        //si alguna celda está fuera de los límites
        //será la propia función la que la ignore
        cAux=document.querySelector(
            `[data-i='${i-1}'][data-j='${j-1}']`
        );
        _mostrarCelda(cAux,i-1,j-1);

        cAux=document.querySelector(
            `[data-i='${i-1}'][data-j='${j}']`
        );
        _mostrarCelda(cAux,i-1,j)

        cAux=document.querySelector(
            `[data-i='${i-1}'][data-j='${parseInt(j)+1}']`
        );
        _mostrarCelda(cAux,i-1,j+1);

        cAux=document.querySelector(
            `[data-i='${i}'][data-j='${j-1}']`
        );
        _mostrarCelda(cAux,i,j-1);

        cAux=document.querySelector(
            `[data-i='${i}'][data-j='${parseInt(j)+1}']`
        );
        _mostrarCelda(cAux,i,j+1);

        cAux=document.querySelector(
            `[data-i='${parseInt(i)+1}'][data-j='${j-1}']`
        );
        _mostrarCelda(cAux,i+1,j-1);

        cAux=document.querySelector(
            `[data-i='${parseInt(i)+1}'][data-j='${j}']`
        );
        _mostrarCelda(cAux,i+1,j);

        cAux=document.querySelector(
            `[data-i='${parseInt(i)+1}'][data-j='${parseInt(j)+1}']`
        );
        _mostrarCelda(cAux,i+1,j+1);
    }

    function _despejarTablero(){
        let celdasOcultas=document.querySelectorAll(".oculta");
        for(let celda of celdasOcultas){
            celda.classList.remove("oculta");
            celda.classList.add("visible");
        }
    }
    /**
     * Genera un nuevo tablero
     */
    this.recalcular = function (ancho, alto, nMinas) {
        //Si no se pasan parámetros, se toman
        //los valores antiguos
        if (ancho !== undefined) _ancho = ancho;
        if (alto !== undefined) _alto = alto;
        if (nMinas !== undefined) _nMinas = nMinas;
        _comenzarTablero();
        _colocaMinas();
        _colocaNumeros();
    };

    /**
     * Prepara el tablero de minas
     * @param {Element} contenedor Elemento que contendrá el tablero
     */
    this.dibujar = function (contenedor) {
        //la propiedad contenedor del buscaminas la ponemos al día
        this.contenedor=contenedor;
        for (let i = 0; i < _alto; i++) {
            let fila = document.createElement("div");
            fila.classList.add("filaMinas");
            contenedor.appendChild(fila);
            for (let j = 0; j < _ancho; j++) {
                let celda = document.createElement("div");
                celda.classList.add("celda");
                celda.classList.add("oculta");
                celda.textContent = "&nbsp;";
                //anotamos la posición en el tablero de la celda
                celda.dataset.i = i;
                celda.dataset.j = j;
                //preparar contenido
                if(_tablero[i][j]===HAY_MINA){
                    celda.innerHTML="<span>"+SIMBOLO_MINA+"</span>";
                }
                else if(_tablero[i][j]===0){
                    celda.innerHTML="<span>&nbsp;</span>";
                }
                else{
                    celda.innerHTML="<span>"+_tablero[i][j]+"</span>";
                }
                //preparamos el evento para la celda
                celda.addEventListener("click", (e) => {
                    _mostrarCelda(e.target);
                });
                //colocamos la celda
                fila.appendChild(celda);
            }

        }
    };

    this.recalcular();

}

