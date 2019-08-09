function Ordenador(marca,modelo,ram=4,disco=512,pulgadas=17){
    this.marca=marca;
    this.modelo=modelo;
    this.ram=ram;
    this.disco=disco;
    this.pulgadas=pulgadas;
    this.toString=function(){
    return "Marca: "+this.marca+"\n"+
        "Modelo: "+this.modelo+"\n"+
        "RAM: "+this.ram+"GB\n"+
        "Disco duro: "+this.disco+"GB\n"+
        "Pulgadas: "+this.pulgadas+" pulgadas\n";
    }
}

function Portatil(marca,modelo,ram=4,disco=256,pulgadas=13,autonomia=4){
    this.__proto__=new Ordenador(marca,modelo,ram,disco,pulgadas);
    this.autonomia=autonomia;    
    this.toString=function(){
        return this.__proto__.toString() +
            "Autonomía: "+this.autonomia+" horas\n";
    }
}


var o1=new Ordenador("HP","EliteDisplay",8,256,23,);
var o2=new Ordenador("Dell","Inspiron AIO");
var p1=new Portatil("Apple","Macbook Air",8,128,13,12);
var p2=new Portatil("Acer","Aspire");
console.log(o1.toString());
console.log(o2.toString());
console.log(p1.toString());
console.log(p2.toString());

