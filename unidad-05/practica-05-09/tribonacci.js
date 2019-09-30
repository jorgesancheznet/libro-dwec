function tribonacci(n){
    if(n<=0) return 0;
    else if (n==1) return 1;
    else{
        return tribonacci(n-1)+tribonacci(n-2)+tribonacci(n-3);
    }
}

console.log(tribonacci(3));

function tribonacci2(n){
    if(n<=0) return 0;
    else if (n==1) return 1;
    else if (n==2) return 1;
    else if (n==3) return 2;
    else{
        let f3=1;
        let f2=1;
        let f1=2;
        let res=0;
        for(let i=4;i<=n;i++){
            res=f1+f2+f3;
            //intercambio de valores para la siguiente iteración
            f3=f2;
            f2=f1;
            f1=res;
        }
        return res;
    }
}

