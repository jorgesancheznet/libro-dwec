Map.prototype.invertirMapa=function(){
    let mapaInvertido=new Map(); //El mapa que devolveremos

    for(let [clave,valor] of this){
        //buscamos el valor en el nuevo mapa
        if(mapaInvertido.has(valor)){
            //añadimos la clave al array
            mapaInvertido.get(valor).push(clave);
        }        
        else{
            //creamos el primer valor en forma de Array
            mapaInvertido.set(valor,[clave]);
        }
    }
    return mapaInvertido;
}

//Prueba de funcionamiento
let mapa=new Map([
    [1,"Óptimo"],
    [2,"Notable"],
    [3,"Notable"],
    [4,"Excelente"],
    [5,"Mejorable"],
    [6,"Excelente"],
    [7,"Notable"],
]);
let mapaInv=mapa.invertirMapa();
console.log(mapaInv);