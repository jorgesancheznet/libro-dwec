function Punto(x,y){
    this.x=x;
    this.y=y;

    this.cambiar=(x,y)=>{
        this.x=x;
        this.y=y;
    }
    this.copia=()=>(new Punto(this.x,this.y));
    this.suma=(p2)=>(new Punto(this.x+p2.x,this.y+p2.y));
    this.toString=()=>(`(${this.x},${this.y})`);
    this.obtenerDistancia=function(p2){
        return Math.sqrt(
                Math.pow(Math.abs(this.x-p2.x),2) +
                Math.pow(Math.abs(this.y-p2.y),2)
            )
    };
}

//Prueba de los métodos y construcciones
var p=new Punto(1,2);
var q=new Punto(6,-3);
//modificamos coordendas de p
p.cambiar(-5,2);
//r será una copia de p
var r=p.copia()
r.x=9;
//comprobamos que r y p son puntos distintos
console.log("p: "+p.toString());
console.log("r: "+r.toString());

//s es un nuevo punto que toma la suma de coordenadas
//de p y r
var s=p.suma(r);
console.log("s: "+s.toString());
//Obtener distancia entre p y q
console.log("Distancia entre p y q: "+p.obtenerDistancia(q));






