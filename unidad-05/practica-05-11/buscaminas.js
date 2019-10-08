const ANCHO_TABLERO=9;
const ALTO_TABLERO=9;
const N_MINAS=16;

const HAY_MINA=10;

/**
 * Coloca las minas en el tablero indicado
 * @param {Array} tablero 
 * @param {Number} ancho 
 * @param {Number} alto 
 * @param {Number} nMinas 
 */
function colocaMinas(tablero,ancho,alto,nMinas){
    for(let cont=1;cont<=nMinas;cont++){
        let fila,posY;
        //calculamos posición aleatoria para la mina
        //se repite si en la casilla ya hay una mina
        do{
            fila=parseInt(Math.random()*alto);
            col=parseInt(Math.random()*ancho);
        }while(tablero[fila][col]==HAY_MINA);
        //colocamos la mina
        tablero[fila][col]=HAY_MINA;
    }
}

/**
 * Revisa cada celda del tablero y coloca
 * el número de minas a su alrededor
 * @param {Array} tablero 
 * @param {Number} ancho 
 * @param {Number} alto 
 */
function colocaNúmeros(tablero,ancho,alto){
    //recorremos las celdas
    for (let i=0;i<alto;i++){
        for(let j=0;j<ancho;j++){
            colocaNúmeroCelda(tablero,i,j);
        }
    }
}

/**
 * Revisa las minas alrededor de la celda
 * que se encuentra en la fila y columna
 * indicada
 * @param {Array} tablero 
 * @param {Number} fila 
 * @param {Number} col 
 */
function colocaNúmeroCelda(tablero,fila,col){
    let cont=0;
    //solo cambiamos las celdas sin mina
    if(tablero[fila][col]!=HAY_MINA){
        //revisamos las ocho celdas alrededor
        if(col>0){
            if(fila>0){
                if(tablero[fila-1][col-1]==HAY_MINA)
                    cont++;
            }
            if(tablero[fila][col-1]==HAY_MINA)
                cont++;
            if(fila<tablero.length-1){
                if(tablero[fila+1][col-1]==HAY_MINA)
                    cont++;
            }            
        }
        if(col<tablero[fila].length){
            if(fila>0){
                if(tablero[fila-1][col+1]==HAY_MINA)
                    cont++;
            }
            if(tablero[fila][col+1]==HAY_MINA)
                cont++;
            if(fila<tablero.length-1){
                if(tablero[fila+1][col+1]==HAY_MINA)
                    cont++;
            } 
        }
        if(fila>0){
            if(tablero[fila-1][col]==HAY_MINA)
                cont++;
        }
        if(fila<tablero.length-1){
            if(tablero[fila+1][col]==HAY_MINA)
                cont++;
        }
        tablero[fila][col]=cont;
    }
}

//Crea el tablero, las minas y los valores
//de minas cercanas
function creaTableroMinas(ancho=9,alto=9,nMinas=16){
    //creación del tablero en sí;
    let tableroMinas=new Array(alto);    
    for(let i=0;i<ancho;i++){
        tableroMinas[i]=new Array(ancho);        
    }
    //iniciamos a cero el tablero
    for (let i=0;i<alto;i++){
        for(let j=0;j<ancho;j++){
            tableroMinas[i][j]=0;
        }
    }

    colocaMinas(tableroMinas,ancho,alto,nMinas);
    colocaNúmeros(tableroMinas,ancho,alto);
    return tableroMinas;
}

function dibujaTableroMinas(tablero,ancho,alto){
    for(let i=0;i<alto;i++){
        document.write("<div class='filaMinas'>");
        for(let j=0;j<ancho;j++){
            document.write("<div class='celda'>");
            if(tablero[i][j]>0){
                if(tablero[i][j]==HAY_MINA){
                    document.write("MINA");
                }
                else{
                    document.write(tablero[i][j]);
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


