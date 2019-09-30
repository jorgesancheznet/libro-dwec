function anagrama(arrayStrings){
    /* Array que tendrá los valores del array, 
       pero en minúsculas y sin tildes
    */
    const arrayAux=[];

    //solo actuamos si tenemos un array
    if(arrayStrings instanceof Array){
        //recorrido para quitar tildes y pasar a minúsculas
        for (let texto of arrayStrings){
            //convertimos a minúsculas
            texto=texto.toLocaleLowerCase("es");  
            let textoR=texto;
            //quitamos tildes de todos los textos
            do{
                texto=textoR; //para guardar el estado previo
                textoR=textoR.replace('á','a');
                textoR=textoR.replace('é','e');
                textoR=textoR.replace('í','i');
                textoR=textoR.replace('ó','o');
                textoR=textoR.replace('ú','u');
                textoR=textoR.replace('ü','u');
                textoR=textoR.replace('à','a');
                textoR=textoR.replace('è','e');
                textoR=textoR.replace('ì','i');
                textoR=textoR.replace('ò','o');
                textoR=textoR.replace('ù','u');
            }while(texto!=textoR);
            texto=textoR;
            //colocamos el texto normalizado
            //en el segundo array
            arrayAux.push(texto);
        }

        //ordenamos cada texto del array
        for(let i in arrayAux){
            //convertimos el texto en array de caracteres
            let a=arrayAux[i].split('');
            a.sort((a,b)=>a.localeCompare(b,"es"));
            arrayAux[i]=a.join('');
        }
        //ahora comprobamos que todos los elementos 
        //del array son iguales, si no, devolvemos false
        let primerTexto=arrayAux[0];
        //navegamos desde el segundo elemento
        let anagrama=true;
        for(let i=1;anagrama && i<arrayAux.length;i++){
            anagrama=(primerTexto==arrayAux[i]);
        }
        return anagrama;        
    }
    else{
        return false;
    }
}

console.log(anagrama(["Hola","LOAH","Hálo"]));