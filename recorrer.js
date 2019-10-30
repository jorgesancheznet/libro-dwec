let punto={
    x:19, 
    y:36, 
    mostrarCoordenadas:()=>`(${punto.x},${punto.y})`
};
for(let prop in punto){
    console.log(`${prop} vale ${punto[prop]}`);   
}