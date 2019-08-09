
const setPalabras=new Set();
var arrayPalabras=[];
//hacemos una primera lectura adelantada
var palabra=prompt("Escriba una palabra (o nada si desea acabar");
while(palabra !=null && palabra!=""){
    setPalabras.add(palabra);
    palabra=prompt("Escriba una palabra (o nada si desea acabar");
}
//convertimos en array
arrayPalabras=[...setPalabras];
//ordenamos por lo contrario a localCompare
//por eso ponemos un signo "menos" por delante
arrayPalabras.sort((a,b)=>(-a.localeCompare(b,"es")));
//recorremos el array usando forEch 
//(podríamos) usar cualquier otro bucle
arrayPalabras.forEach(function(pal){
    document.write(`<p>${pal}</p>`);
})