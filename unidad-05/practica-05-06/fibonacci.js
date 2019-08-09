function fibonacci(x){
    if(x==0) return 0;
    else if(x==1) return 1;
    else return  fibonacci(x-1)+fibonacci(x-2);
}

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(10));
