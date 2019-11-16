//ejecutamos el código tras asegurarnos de que el contenido está cargado
window.addEventListener("DOMContentLoaded", (e) => {
    let checkboxes = document.querySelectorAll("[type='checkbox']");
    let ocultar = document.getElementById("ocultar");
    let capas = document.getElementsByClassName("capas");
    let todo = document.getElementById("todo");
    let capaTodo = document.getElementById("capaTodo");
    //eventos a los checkbox
    for (let checkbox of checkboxes) {
        checkbox.addEventListener("change", (e) => {
            let capa = document.getElementById(e.target.value);
            if (e.target.checked) {
                capa.style.display = "block";
            } else {
                capa.style.display = "none";
            }
        })
    }
    //ocultar las capas
    ocultar.addEventListener("click",(e)=>{
        //ocultamos las capas
        for(let capa of capas){
            capa.style.display="none";
        }
        //desactivamos checkboxes
        for(let cb of checkboxes){
            cb.checked=false;
        }
    });
    //ocultar en negro
    todo.addEventListener("click",(e)=>{
        capaTodo.style.top=0;
        capaTodo.style.transition="1s";
    });
    //volver a mostrar
    capaTodo.addEventListener("click",(e)=>{
        capaTodo.style.top="-100%";
        capaTodo.style.transition="1s";
    })
});
