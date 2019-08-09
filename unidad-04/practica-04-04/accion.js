const N_REPETICIONES=10000;
//preparación del mapa inicial con las frecuencias a cero
let mapa=new Map();
for(let i=1;i<=10;i++){
    mapa.set(i,0);
}

//10.000 veces calculamos números aleatorios del 1 al 10
for(let i=1;i<=N_REPETICIONES;i++){
    let n=parseInt((Math.random()*10)+1);    
    let frecActual=mapa.get(n);
    mapa.set(n,frecActual+1);
}

//mostramos los resultados
document.write("<h1>Frecuencias</h1>");
document.write("<ul>");
for(let i=1;i<=10;i++){
    document.write(
        `<li><strong>Número ${i}:</strong> `+
        `${mapa.get(i)}</li>`
    );
}
document.write("</ul>");