/**
 * Busca el texto en un elemento y 
 * @param {string} palabra El texto a buscar
 * @param {Element} elemento El elemento en el que se quiere buscar el texto
 * @returns {boolean} true si la palabra se encontró 
 */
function marcarPalabra(palabra,elemento){
    let texto=elemento.textContent;
    //comprobamos si la palabra está en el contenido del elemento
    let pos=texto.indexOf(palabra);
    if(pos!=-1){
        //usamos una expresión regular para modificar todas
        //las apariciones de la palabra con el modificador g
        //El método replace de los trings admte expresiones 
        //regulares
        let expReg=new RegExp(palabra,"g");
        //se reemplazan todas las apariciones de la palabra  
        //contenido con el texto marcado
        elemento.innerHTML=elemento.innerHTML.replace(
            expReg,"<mark>"+palabra+"</mark>");
        return true;
    }
    else
        return false;
}

/**
 * Función recursiva que usa la función marcarPalabra
 * para buscar en todos los hijos del elemento que se pase
 * la palabra que se busque.
 * Cuando un hijo tiene más hijos, se invoca de nuevo a 
 * esta misma función
 * @param {Element} elemento 
 * @param {string} palabra 
 */
function buscarTextoEnElemento(elemento,palabra){
    if(elemento.children){
        //Recorre todos los hijos del elemento
        for(let hijo of elemento.children){
            if(hijo.children.length>0){
                //Llamada recursiva si el elemento
                //tiene hijos
                buscarTextoEnElemento(hijo);
            }
            else{
                marcarPalabra(palabra,hijo);
            }
        }
    }
}

//Código principal
let texto=prompt("Escriba la palabra a marcar");
if(texto){
    buscarTextoEnElemento(document.body,texto);
}