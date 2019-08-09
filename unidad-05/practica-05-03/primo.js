function esPrimo(n){
    //no tiene sentido enviar como parámetro
    //números negativos o cero, por si acaso devolvemos
    //false en previsión de un bucle infinito
    if(n<1) return false; 
    //el 1 le separamos, no hace falta dividir
    if(n==1) return true;     
    //para el resto empezamos a dividir entre 2
    //y terminamos cuando la raíz cuadrada
    //del contador supere al número
    for(let i=2;i*i<=n;i++){
        //si el número se puede dividir por el contador
        //no tenemos un primo
        if(n%i==0) return false;
    }
    //si hemos salido del bucle sin ejecutar el return
    //tenemos un número primo
    return true;
}