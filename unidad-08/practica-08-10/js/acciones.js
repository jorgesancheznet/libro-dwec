window.addEventListener("DOMContentLoaded",(e)=> {
    let mas = document.getElementById("mas");
    let tarea = document.getElementById("tarea");
    let lista = document.getElementById("lista");
    //añadir tarea
    mas.addEventListener("click", (e) => {
        e.preventDefault();
        let nuevoItem = document.createElement("li");
        nuevoItem.innerHTML = `<span class='texto'>${tarea.value}` +
            `</span><a href="#" class="menos">quitar</a></li>`;
        lista.appendChild(nuevoItem);
        tarea.value = "";
        tarea.focus();
    });

    //programamos quitar tarea y recolocarlo, lo hacemos como
    //click del body, porque son elementos que aun no se han
    //creado, pero sí sabremos de quyé tipo son
    document.body.addEventListener("click",(e)=>{
        //comprobamos si el click es en un elemento de tipo menos
        //quitar tarea
        if (e.target.classList.contains("menos")){
            e.target.parentElement.remove();
        }
        //subir arriba la tarea
        else if (e.target.classList.contains("texto")){
            //copiamos el elemento y le eliminamos
            let copiaElto=e.target.parentElement;
            e.target.parentElement.remove();

            //comprobamos si hay hijos
            if(lista.children.length>0){
                lista.insertBefore(copiaElto,lista.children[0]);
            }
            else{
                lista.appendChild(copiaElto);
            }
        }
    });
});
