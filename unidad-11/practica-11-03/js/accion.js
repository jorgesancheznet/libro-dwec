//Variables globales
var listaTareas=new Set();
var btMas=document.getElementById("mas");
var tTarea=document.getElementById("tarea");
var uLista=document.getElementById("lista");
/**
 * Realiza todas las acciones necesarias para añadir
 * la tarea y que se vea en la lista
 */
function anadirTarea(nuevaTarea){
    //buscamos si la tarea existe, si no, la añadimos
    if(listaTareas.has(nuevaTarea)==false){
        //almacenamos la nueva tarea en la lista
        listaTareas.add(nuevaTarea);
        actualizarLista();
        //creamos el nuevo elemento con la nueva tarea
        let liNuevo=document.createElement("li");
        liNuevo.innerHTML=`<span>${nuevaTarea}</span> <button>Eliminar</button>`;   
        //preparamos el evento en el botón
        prepararBorrar(liNuevo)
        //Ahora la colocamos en su posición idónea
        //hay que buscar cuál es
        if(uLista.children.length>0){
            
            for(let li of uLista.children){
                //comprobamos que el elemento actual siga siendo menor
                //en orden alfabético, de no ser así, añadimos el nuevo
                //elemento delante del actual.
                let contenidoLi=li.querySelector("span").textContent;
                if(contenidoLi.localeCompare(nuevaTarea ,"es")>0){
                    uLista.insertBefore(liNuevo,li);                    
                    return; //abandonamos la función
                }
            }            

        }
        //tanto en caso de que la lista este vacía
        //como en el de que sea el último elemento
        //hacemos lo mismo
        uLista.appendChild(liNuevo);
    }
}

function prepararBorrar(liTarea){
    let boton=liTarea.querySelector("button");   
    boton.addEventListener("click",(ev)=>{
        let textoLista=ev.target.parentNode.querySelector("span").textContent;
        //borramos el elemento li
        uLista.removeChild(ev.target.parentNode);   
        //borramos el elemento de la lista y la actualizamos
        listaTareas.delete(textoLista)        
        actualizarLista();
    })
    
}

/**
 * Muestra el contenido de la lista de tareas en forma de lista
 * ordenada
 */
function prepararLista(arrayTareas){
    //recorremos el set y mostramos la lista
    for(let textoLi of arrayTareas){
        let liNuevo=document.createElement("li");
        liNuevo.innerHTML=`<span>${textoLi}</span> <button>Eliminar</button>`;   
        prepararBorrar(liNuevo)     ;
        uLista.appendChild(liNuevo)
    }
}
/**
 * Pone el LocalStorage al día
 */
function actualizarLista(){
        localStorage.setItem("listaTareas",JSON.stringify(
            [...listaTareas]
            )
);   
}

//Lectura del array de tareas en LocalStorage
if(localStorage.getItem("listaTareas")){
    //leemos el array de tareas
    let arrayTareas=JSON.parse(localStorage.getItem("listaTareas"));
    //ordenamos
    arrayTareas.sort((a,b)=>a.localeCompare(b,"es"))
    prepararLista(arrayTareas);
    //Convertimos el array en Set
    listaTareas=new Set(arrayTareas);    
}

//Eventos
btMas.addEventListener("click",(ev)=>{
    ev.preventDefault();
    anadirTarea(tTarea.value);
    tTarea.value="";
    tTarea.focus();
});

