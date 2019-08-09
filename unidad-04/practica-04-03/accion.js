//constantes, buena práctica por si queremos
//facilitar el mantenimiento del código
const N_COMBINACIONES=50;
const N_INTERCAMBIOS=50;
const RANGO_TOTAL=49;
const RANGO_SOLUCION=6;
//array que conmtendrá los números de la primitiva
const primitiva=[];

//relleno del array original
for(let i=0;i<RANGO_TOTAL;i++){
    //el índice 0 contendrá el número 1
    //el 1 el 2 y así sucesivamente hasta 
    //los 49 números
    primitiva[i]=i+1;
}

//bucle principal, en cada vuelta se
//muestra una combinación
for(let i=1;i<=N_COMBINACIONES;i++){
    //barajeo del array
    for(let j=1;j<=N_INTERCAMBIOS;j++){
        //i1 e i2 toman un índice
        //del array de forma aleatoria
        let i1=parseInt(Math.random()*primitiva.length);
        let i2=parseInt(Math.random()*primitiva.length);
        //intercambio de los valores de dos
        //elementos aleatorios
        [primitiva[i1],primitiva[i2]]=[primitiva[i2],primitiva[i1]];
    }
    document.write(`<h2>Combinación número ${i}</h2>`);
    //mostrar seis primeros elementos del array
    document.write("<p>");
    for(let j=0;j<RANGO_SOLUCION;j++){
        document.write(`${primitiva[j]} `);
    }
    document.write("</p>");
    
}