Array.prototype.media=function(){
    let suma=this.reduce((anterior,actual)=>(anterior+actual));
    let tamaño=this.length;
    return suma/tamaño;
}

let a1=[1,2,3,4,5,6];
console.log(a1.media());
let a2=[10,13,16,21,28,19,45,32,20];
console.log(a2.media());
