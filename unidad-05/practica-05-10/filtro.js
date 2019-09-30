function filtro(array,f){
    if(array instanceof Array){
        for(let i in array){
            array[i]=f(array[i]);
        }
    }
}
function factorial(n){
    if(n<0) return 0;
    else if (n==0) return 1;
    else return n*factorial(n-1);
}

let array1=[1,2,3,4,5];
filtro(array1,e=>2*e);
console.log(array1);;
let array2=["hola","adiós"];
filtro(array2,e=>e.toUpperCase());
console.log(array2);;
let array3=[1,2,3,4,5];
filtro(array3,e=>factorial(e));
console.log(array3);;
