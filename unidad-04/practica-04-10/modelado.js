const TAM_COLUMNAS=10;
const TAM_FILAS=10;

const TAM_PORTAVIONES=4; 
const N_PORTAVIONES=2;
const TAM_ACORAZADO=3; 
const N_ACORAZADOS=3;
const TAM_DESTRUCTOR=2; 
const N_DESTRUCTORES=3;
const TAM_FRAGATA=1; 
const N_FRAGATAS=2;

let cont;
let fila;
let col;

var tablero=new Array(TAM_FILAS);

//iniciar tablero
for(let i=0;i<TAM_FILAS;i++){
    tablero[i]=new Array(TAM_COLUMNAS);
    for(let j=0;j<TAM_COLUMNAS;j++){
        tablero[i][j]=false;
    }
}

//****************************************colocar portaviones
cont=0;
while(cont<N_PORTAVIONES){
    //cálculo posición aleatoria
    let horizontal=parseInt(Math.random()*2);
    //dibujo de portaviones en horizontal
    if(horizontal){
        fila=parseInt(Math.random()*TAM_FILAS);
        col=parseInt(Math.random()*(TAM_COLUMNAS-TAM_PORTAVIONES+1));
        //comprobación de que en la casilla y adyacentes no hay nada
        let ocupada=false;
        let cont2=0;
        //comprobación de las propias celdas y las de arriba y abajo
        while(ocupada==false && cont2<TAM_PORTAVIONES){
            //comprobación de la casilla y la de arriba y abajo
            if(tablero[fila][col+cont2]) ocupada=true;
            else if(fila>0 && tablero[fila-1][col+cont2]) ocupada=true;
            else if(fila<TAM_FILAS-1 && tablero[fila+1][col+cont2]) ocupada=true;
            cont2++;
        }
        if(ocupada==false){
            //comprobamos las celdas a la izquierda del portaviones
            if(col>0){
                if(tablero[fila][col-1]) ocupada=true;
                else if(fila>0 && tablero[fila-1][col-1]) ocupada=true;
                else if(fila<TAM_FILAS-1 && tablero[fila+1][col-1]) ocupada=true;
            }
            if(ocupada==false){
            //comprobamos las celdas a la derecha  del portaviones
            if(col+TAM_PORTAVIONES<TAM_COLUMNAS){
                    if(tablero[fila][col+TAM_PORTAVIONES]) ocupada=true;
                    else if(fila>0 && tablero[fila-1][col+TAM_PORTAVIONES]) ocupada=true;
                    else if(fila<TAM_FILAS-1 && tablero[fila+1][col+TAM_PORTAVIONES]) ocupada=true;                
                }
            }
        }
        if(ocupada==false){
            //dibujo del portaviones
            for(let i=0;i<TAM_PORTAVIONES;i++){
                tablero[fila][col+i]=true;
            }
            cont++; 
        }
    }
    else{ //dibujo de portaviones en vertical
        fila=parseInt(Math.random()*(TAM_FILAS-TAM_PORTAVIONES+1));
        col=parseInt(Math.random()*TAM_COLUMNAS);
        //comprobación de que en la casilla y adyacentes no hay nada
        let ocupada=false;
        let cont2=0;
        //comprobación de las propias celdas y las de su izquierda y derecha
        while(ocupada==false && cont2<TAM_PORTAVIONES){
            //comprobación de la casilla y las de su izquierda y derecha
            if(tablero[fila+cont2][col]) ocupada=true;
            else if(col>0 && tablero[fila+cont2][col-1]) ocupada=true;
            else if(col<TAM_COLUMNAS-1 && tablero[fila+cont2][col+1]) ocupada=true;
            cont2++;
        }
        if(ocupada==false){
            //comprobamos las celdas arriba y abajo del portaviones
            if(fila>0){
                if(tablero[fila-1][col]) ocupada=true;
                else if(col>0 && tablero[fila-1][col-1]) ocupada=true;
                else if(col<TAM_COLUMNAS-1 && tablero[fila-1][col+1]) ocupada=true;
            }
            if(ocupada==false){
                if(fila+TAM_PORTAVIONES<TAM_FILAS){
                    if(tablero[fila+TAM_PORTAVIONES][col]) ocupada=true;
                    else if(col>0 && tablero[fila+TAM_PORTAVIONES][col-1]) ocupada=true;
                    else if(col<TAM_COLUMNAS-1 && tablero[fila+TAM_PORTAVIONES][col+1]) ocupada=true;                
                }
            }
        }
        if(ocupada==false){
            //dibujo del portaviones
            for(let i=0;i<TAM_PORTAVIONES;i++){
                tablero[fila+i][col]=true;
            }
            cont++; 
        }
    }
}

//****************************************colocar acorazados
cont=0;
while(cont<N_ACORAZADOS){
    //cálculo posición aleatoria
    let horizontal=parseInt(Math.random()*2);
    //dibujo de acorazado en horizontal
    if(horizontal){
        fila=parseInt(Math.random()*TAM_FILAS);
        col=parseInt(Math.random()*(TAM_COLUMNAS-TAM_ACORAZADO+1));
        //comprobación de que en la casilla y adyacentes no hay nada
        let ocupada=false;
        let cont2=0;
        //comprobación de las propias celdas y las de arriba y abajo
        while(ocupada==false && cont2<TAM_ACORAZADO){
            //comprobación de la casilla y la de arriba y abajo
            if(tablero[fila][col+cont2]) ocupada=true;
            else if(fila>0 && tablero[fila-1][col+cont2]) ocupada=true;
            else if(fila<TAM_FILAS-1 && tablero[fila+1][col+cont2]) ocupada=true;
            cont2++;
        }
        if(ocupada==false){
            //comprobamos las celdas a la izquierda y derecha del acorazado
            if(col>0){
                if(tablero[fila][col-1]) ocupada=true;
                else if(fila>0 && tablero[fila-1][col-1]) ocupada=true;
                else if(fila<TAM_FILAS-1 && tablero[fila+1][col-1]) ocupada=true;
            }
            if(ocupada==false){
                if(col+TAM_ACORAZADO<TAM_COLUMNAS){
                    if(tablero[fila][col+TAM_ACORAZADO]) ocupada=true;
                    else if(fila>0 && tablero[fila-1][col+TAM_ACORAZADO]) ocupada=true;
                    else if(fila<TAM_FILAS-1 && tablero[fila+1][col+TAM_ACORAZADO]) ocupada=true;                
                }
            }
        }
        if(ocupada==false){
            //dibujo del acorazado
            for(let i=0;i<TAM_ACORAZADO;i++){
                tablero[fila][col+i]=true;
            }
            cont++; 
        }
    }
    else{ //dibujo de acorazado en vertical
        fila=parseInt(Math.random()*(TAM_FILAS-TAM_ACORAZADO+1));
        col=parseInt(Math.random()*TAM_COLUMNAS);
        //comprobación de que en la casilla y adyacentes no hay nada
        let ocupada=false;
        let cont2=0;
        //comprobación de las propias celdas y las de su izquierda y derecha
        while(ocupada==false && cont2<TAM_ACORAZADO){
            //comprobación de la casilla y las de su izquierda y derecha
            if(tablero[fila+cont2][col]) ocupada=true;
            else if(col>0 && tablero[fila+cont2][col-1]) ocupada=true;
            else if(col<TAM_COLUMNAS-1 && tablero[fila+cont2][col+1]) ocupada=true;
            cont2++;
        }
        if(ocupada==false){
            //comprobamos las celdas arriba y abajo del acorazado
            if(fila>0){
                if(tablero[fila-1][col]) ocupada=true;
                else if(col>0 && tablero[fila-1][col-1]) ocupada=true;
                else if(col<TAM_COLUMNAS-1 && tablero[fila-1][col+1]) ocupada=true;
            }
            if(ocupada==false){
                if(fila+TAM_ACORAZADO<TAM_FILAS){
                    if(tablero[fila+TAM_ACORAZADO][col]) ocupada=true;
                    else if(col>0 && tablero[fila+TAM_ACORAZADO][col-1]) ocupada=true;
                    else if(col<TAM_COLUMNAS-1 && tablero[fila+TAM_ACORAZADO][col+1]) ocupada=true;                
                }
            }
        }
        if(ocupada==false){
            //dibujo del acorazado
            for(let i=0;i<TAM_ACORAZADO;i++){
                tablero[fila+i][col]=true;
            }
            cont++; 
        }
    }
}

//****************************************colocar destructores
cont=0;
while(cont<N_DESTRUCTORES){
    //cálculo posición aleatoria
    let horizontal=parseInt(Math.random()*2);
    //dibujo de destructor en horizontal
    if(horizontal){
        fila=parseInt(Math.random()*TAM_FILAS);
        col=parseInt(Math.random()*(TAM_COLUMNAS-TAM_DESTRUCTOR+1));
        //comprobación de que en la casilla y adyacentes no hay nada
        let ocupada=false;
        let cont2=0;
        //comprobación de las propias celdas y las de arriba y abajo
        while(ocupada==false && cont2<TAM_DESTRUCTOR){
            //comprobación de la casilla y la de arriba y abajo
            if(tablero[fila][col+cont2]) ocupada=true;
            else if(fila>0 && tablero[fila-1][col+cont2]) ocupada=true;
            else if(fila<TAM_FILAS-1 && tablero[fila+1][col+cont2]) ocupada=true;
            cont2++;
        }
        if(ocupada==false){
            //comprobamos las celdas a la izquierda y derecha del destructor
            if(col>0){
                if(tablero[fila][col-1]) ocupada=true;
                else if(fila>0 && tablero[fila-1][col-1]) ocupada=true;
                else if(fila<TAM_FILAS-1 && tablero[fila+1][col-1]) ocupada=true;
            }
            if(ocupada==false){
                if(col+TAM_DESTRUCTOR<TAM_COLUMNAS){
                    if(tablero[fila][col+TAM_DESTRUCTOR]) ocupada=true;
                    else if(fila>0 && tablero[fila-1][col+TAM_DESTRUCTOR]) ocupada=true;
                    else if(fila<TAM_FILAS-1 && tablero[fila+1][col+TAM_DESTRUCTOR]) ocupada=true;                
                }
            }
        }
        if(ocupada==false){
            //dibujo del destructor
            for(let i=0;i<TAM_DESTRUCTOR;i++){
                tablero[fila][col+i]=true;
            }
            cont++; 
        }
    }
    else{ //dibujo de destructor en vertical
        fila=parseInt(Math.random()*(TAM_FILAS-TAM_DESTRUCTOR+1));
        col=parseInt(Math.random()*TAM_COLUMNAS);
        //comprobación de que en la casilla y adyacentes no hay nada
        let ocupada=false;
        let cont2=0;
        //comprobación de las propias celdas y las de su izquierda y derecha
        while(ocupada==false && cont2<TAM_DESTRUCTOR){
            //comprobación de la casilla y las de su izquierda y derecha
            if(tablero[fila+cont2][col]) ocupada=true;
            else if(col>0 && tablero[fila+cont2][col-1]) ocupada=true;
            else if(col<TAM_COLUMNAS-1 && tablero[fila+cont2][col+1]) ocupada=true;
            cont2++;
        }
        if(ocupada==false){
            //comprobamos las celdas arriba y abajo del destructor
            if(fila>0){
                if(tablero[fila-1][col]) ocupada=true;
                else if(col>0 && tablero[fila-1][col-1]) ocupada=true;
                else if(col<TAM_COLUMNAS-1 && tablero[fila-1][col+1]) ocupada=true;
            }
            if(ocupada==false){
                if(fila+TAM_DESTRUCTOR<TAM_FILAS){
                    if(tablero[fila+TAM_DESTRUCTOR][col]) ocupada=true;
                    else if(col>0 && tablero[fila+TAM_DESTRUCTOR][col-1]) ocupada=true;
                    else if(col<TAM_COLUMNAS-1 && tablero[fila+TAM_DESTRUCTOR][col+1]) ocupada=true;                
                }
            }
        }
        if(ocupada==false){
            //dibujo del destructor
            for(let i=0;i<TAM_DESTRUCTOR;i++){
                tablero[fila+i][col]=true;
            }
            cont++; 
        }
    }
}

//****************************************colocar fragatas
cont=0;
while(cont<N_FRAGATAS){
    fila=parseInt(Math.random()*TAM_FILAS);
    col=parseInt(Math.random()*TAM_COLUMNAS);
    //comprobación de que en la casilla y adyacentes no hay nada
    let ocupada=false;
    let cont2=0;
    //comprobación de la propia celda
    if(tablero[fila][col]) ocupada=true;
    //adyacentes en la fila superior
    if(ocupada==false){
        if (fila>0){ 
            if(tablero[fila-1][col]) ocupada=true;
            else if(col>0 && tablero[fila-1][col-1]) ocupada=true;
            else if(col<TAM_COLUMNAS-1 &&  tablero[fila-1][col+1]) ocupada=true;
        }
    }
    //adyacentes fila inferior
    if(ocupada==false){
        if(fila<TAM_FILAS-1){ 
            if(tablero[fila+1][col]) ocupada=true;
            else if(col>0 && tablero[fila+1][col-1]) ocupada=true;
            else if(col<TAM_COLUMNAS-1 &&  tablero[fila+1][col+1]) ocupada=true;            
        }
    }
    //adyacentes en la propia fila
    if(ocupada==false){
        if(col>0 && tablero[fila][col-1]) ocupada=true;
        if(col<TAM_COLUMNAS-1 && tablero[fila][col+1]) ocupada=true;
    }

    if(ocupada==false){
        //dibujo de la fragata
        tablero[fila][col]=true;
        cont++; 
    }
}

//Dibujo del tablero
document.write("<div id='contenedor'>")
for(let i=0;i<TAM_FILAS;i++){
    for(let j=0;j<TAM_COLUMNAS;j++){
        if(tablero[i][j]){//hay barco en esta celda
            document.write("<div class='celda ocupada'></div>");
        }
        else{
            document.write("<div class='celda'></div>"); 
        }
    }
}
document.write("</div>")
