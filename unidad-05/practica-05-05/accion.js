const arrayPalabras=[];
let mapa;
//hacemos una primera lectura adelantada
var palabra=prompt("Escriba una palabra (o nada si desea acabar");
while(palabra !=null && palabra!=""){
    arrayPalabras.push(palabra);
    palabra=prompt("Escriba una palabra (o nada si desea acabar");
}
//ordenamos el array
arrayPalabras.sort((a,b)=>(a.localeCompare(b,"es")));
//convertimos en mapa
mapa=mapaRepeticiones(arrayPalabras);
//recorremos el mapa y mostramos las repeticiones
for([palabra,cont] of mapa){
    document.write(`<p>${palabra}, ${cont} repeticiones`)
}