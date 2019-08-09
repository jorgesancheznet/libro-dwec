let numero, n;
let salir=false;
let volver;
do { // se repite este código al menos una vez
    cont=0;
    // cálculo del número del 1 al 1000
    numero = parseInt(Math.random() * 1000) + 1;
    do { 
    // bucle del juego, se repite hasta
    // que el usuario indique salir o acierte
        do{
        // bucle de petición del número
        // se repite mientras el usuario no
        // indique un número correcto o 
        // pulse cancelar
            volver=false;
            n = prompt("¿Qué número del 1 al 1000 crees que he pensado?");
            // si se canceló el cuadro
            // la variable centinela "salir"
            // valdrá true
            if(n==null) salir=true;
            //comprobamos si el número es válido
            else if(isNaN(n) || n<0 || n>1000){
                alert("Número no válido");
                volver=true;
            }
        }while(salir==false && volver==true);

        cont++; 
        if(salir==false) {
            // mensajes de lo cerca o no que
            // está el número del usuario
            // solo se muestran si no se pulsó en salir
            if (numero > n) {
                alert("Mi numero es mayor")
            }
            else if (numero < n) {
                alert("Mi numero es menor")
            }
        }
    } while (salir==false && n != numero);
    // solo podemos salir si hemos acertado o 
    // hemos cancelado algún cuadro
    if(salir==false) 
        // mensaje de acierto
        alert("¡Acertaste! Intentos: "+cont);
    // pedimos confirmación al usuario para 
    // jugar otra vez si no ha indicado que quiere
    // salir
}while(salir==false && confirm("¿Quieres jugar de nuevo?"));

//mensajes dependiendo de lo que eligió el usuario
if(salir) {
    document.write("<h1>Se canceló la partida</h1>");
}
else document.write("<h1>Gracias por jugar</h1>");
