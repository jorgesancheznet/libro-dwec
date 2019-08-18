//Todo el código le colocamos de forma que tengamos
//asegurada toda la carga del DOM
window.addEventListener("load",function(ev){
    //asignación de elementos
    var imagen=document.getElementById("imagen");
    var combo=document.getElementById("tipo");
    var serie=document.getElementById("serie");
    var labelSerie=document.getElementById("labelSerie");
    var labelDescripcion=document.getElementById("labelDescripcion");
    var enviar=document.getElementById("enviar");
    var mostrarDescripcion=document.getElementById("mostrarDescripcion");
    var capaError=document.getElementById("capaError");
    var fDescripcion=document.getElementById("fDescripcion");

    //Cuadro combinado que cambia la imagen
    combo.addEventListener("change",function(ev){
        imagen.setAttribute("src",`img/${combo.value}.jpg`);
        labelSerie.removeAttribute("class");
        serie.removeAttribute("class");
    });

    //Si se coloca el foco en el número de serie
    //quitamos los errores
    serie.addEventListener("focus",function(ev){
        capaError.textContent="";
        labelSerie.classList.remove("error");
        serie.classList.remove("error");
    });
    //Validación del número de serie al intentar enviar los datos
    enviar.addEventListener("click",function(ev){
        if(/^[0-9]{3}[A-Z]{4}[12A]$/.test(serie.value)==false){
            ev.preventDefault();
            capaError.textContent="Código no válido";
            labelSerie.classList.add("error");
            serie.classList.add("error")
        }
    });
    //Click en el botón de descripción, muestra una capa
    //con el área de texto y la etiqueta
    mostrarDescripcion.addEventListener("click",function(ev){
        fDescripcion.style.display="inline-block";
        this.style.display="none";
    });
});