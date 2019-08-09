function fibonacci2(x){
    //acumuladores de los dos elementos anteriores
    let acu1=1; 
    let acu2=0; 
    //acumula el resultado final
    let fibo=1; 
    if (x==0) return 0;
    else if (x==1) return 1;
    else{
        for(let i=2;i<=x;i++){
            //se actualizan los valores para la siguiente suma
            [acu1,acu2]=[acu2,fibo];
            //resultado
            fibo=acu1+acu2;
            
        }
        return fibo;
    }    
}

console.log(fibonacci2(0));
console.log(fibonacci2(1));
console.log(fibonacci2(2));
console.log(fibonacci2(3));
console.log(fibonacci2(4));
console.log(fibonacci2(5));
console.log(fibonacci2(10));
