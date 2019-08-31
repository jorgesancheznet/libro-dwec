/**
 * Función que realiza la petición fetch y coloca el mapa en el documento
 * en el elemento indicado
 * @param {string} apikey
 * @param {Element} elemento Contenedor de la imagen y el formulario
 * */
async function procesarFetch(apikey,elemento){
    let form=elemento.querySelector("form");
    var headers = new Headers({
        "cache-control": "no-cache"
    });
    var conf={
        method:"GET",
        mode:"cors",
        headers:headers,
    }
    try{
        const resp1=await fetch("https://opendata.aemet.es/opendata/api/mapasygraficos/analisis?api_key="+
                            apikey,conf) ;                        
        const data1=await resp1.json();
        const resp2=await fetch(data1.datos,conf);
        const mapa=await resp2.blob();
        const img=document.createElement("img");
        img.setAttribute("src",URL.createObjectURL(mapa));
        //Añadimos la imagen y quitamos el formulario
        elemento.removeChild(form);
        elemento.appendChild(img);
    }
    catch(error){
        let p=document.createElement("p");
        p.innerHTML="<strong>Error al cargar el mapa:</strong> "+error;
        elemento.appendChild(p);
    }
}

//Código principal dentro del evento load
// para asegurar la carga de los componentes
window.addEventListener("load",(ev)=>{
    
    let main=document.querySelector("main");
    let apiKey=document.querySelector("textarea");
    let boton=document.querySelector("button");

    boton.addEventListener("click",(ev)=>{
        ev.preventDefault();
        procesarFetch(apiKey.value,main);
    });
});