let a=1;
let b=2;
[a,b]=[b,a];
console.log("a vale "+a);
console.log("b vale "+b);

function triple(n){
	return 3*n;
}

let x=6, y=4, z="Hola";
console.log(triple(9)); //Escribe 27
console.log(triple(x)); //Escribe 18 
console.log(triple(x+y)); //Escribe 30
console.log(triple(x)+triple(y)); //Escribe 30
console.log(triple(triple(9))); //Escribe 81
console.log(triple(z)); //Escriba NaN