
//función constructora
function Buscaminas(ancho,alto,nMinas){
    const HAY_MINA=10;
    //propiedades privadas
    var _ancho=ancho;
    var _alto=alto;
    var _nMinas=nMinas;
    var _tablero=null;
    //validamos la corrección de los datos
    if(isNaN(Number(parseInt(ancho))) || ancho==0) return null;
    if(isNaN(Number(parseInt(alto))) || alto==0) return null;
    if(isNaN(Number(parseInt(nMinas))) || nMinas==0) return null;
    if(ancho*alto<nMinas) return null;




    //************FUNCIONES PRIVADAS */

    /**
     * Inicia el array de minas
     */
    _comenzarTablero=function(){
        _tablero=new Array(_alto);
        for(let i=0;i<_ancho;i++){
            _tablero[i]=new Array(_ancho);
        }
        //iniciamos a cero el tablero
        for (let i=0;i<_alto;i++){
            for(let j=0;j<_ancho;j++){
                _tablero[i][j]=0;
            }
        }
    }

    /**
     * Mira las celdas de alrededor y coloca el número de minas en 
     * la celda cuya posición se indica
     */
    _colocaNúmeroCelda=function(fila,col){
        let cont=0;
        //solo cambiamos las celdas sin mina
        if(_tablero[fila][col]!=HAY_MINA){
            //revisamos las ocho celdas alrededor
            if(col>0){
                if(fila>0){
                    if(_tablero[fila-1][col-1]==HAY_MINA)
                        cont++;
                }
                if(_tablero[fila][col-1]==HAY_MINA)
                    cont++;
                if(fila<_tablero.length-1){
                    if(_tablero[fila+1][col-1]==HAY_MINA)
                        cont++;
                }
            }
            if(col<_tablero[fila].length){
                if(fila>0){
                    if(_tablero[fila-1][col+1]==HAY_MINA)
                        cont++;
                }
                if(_tablero[fila][col+1]==HAY_MINA)
                    cont++;
                if(fila<_tablero.length-1){
                    if(_tablero[fila+1][col+1]==HAY_MINA)
                        cont++;
                }
            }
            if(fila>0){
                if(_tablero[fila-1][col]==HAY_MINA)
                    cont++;
            }
            if(fila<_tablero.length-1){
                if(_tablero[fila+1][col]==HAY_MINA)
                    cont++;
            }
            _tablero[fila][col]=cont;
        }
    };
    /**
     * Pone los números de mina alrededor de
     * todas las celdas
     */
    _colocaNúmeros=function(){
        //recorremos las celdas
        for (let i=0;i<_alto;i++){
            for(let j=0;j<_ancho;j++){
                _colocaNúmeroCelda(i,j);
            }
        }
    };

    _colocaMinas=function(){
        let fila,col;
        for(let cont=1;cont<=_nMinas;cont++){
            //calculamos posición aleatoria para la mina
            //se repite si en la casilla ya hay una mina
            do{
                fila=parseInt(Math.random()*_alto);
                col=parseInt(Math.random()*_ancho);
            }while(_tablero[fila][col]==HAY_MINA);
            //colocamos la mina
            _tablero[fila][col]=HAY_MINA;
        }
    }
    /**
     * Genera un nuevo tablero
     */
    this.recalcular=function(ancho,alto,nMinas){
        //Si no se pasan parámetros, se toman
        //los valores antiguos
        if(ancho!=undefined) _ancho=ancho;
        if(alto!=undefined) _alto=alto;
        if(nMinas!=undefined) _nMinas=nMinas;
        _comenzarTablero();
        _colocaMinas();
        _colocaNúmeros();        
    }

    /**
     * Dibuja el tablero de minas
     */
    this.dibujar=function(){
        for(let i=0;i<_alto;i++){
            document.write("<div class='filaMinas'>");
            for(let j=0;j<_ancho;j++){
                document.write("<div class='celda'>");
                if(_tablero[i][j]>0){
                    if(_tablero[i][j]==HAY_MINA){
                        document.write("MINA");
                    }
                    else{
                        document.write(_tablero[i][j]);
                    }
                }
                else{
                    document.write("&nbsp;");
                }
                document.write("</div>");
            }
            document.write("</div>");
        }
    }

    this.recalcular();

}

