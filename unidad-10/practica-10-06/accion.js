/**
 *
 * @param apikey Clave de desarrollador de la NASA
 * @param fecha La fecha en formato yyyy-mm-dd
 * @param capaImagen Contenedor para la imagen
 * @returns {Promise<void>}
 */
async function obtenerImagen(apikey,fecha,capaImagen) {
    console.log("aqui")
    var conf = {
        method: "GET",
        mode: "cors",
        headers: new Headers({
            "cache-control": "no-cache",
            "Content-Type": "application/json"
        })
    };
    try {
        const resp = await fetch(`https://api.nasa.gov/planetary/apod` +
            `?api_key=${apikey}&date=${fecha}`, conf);
        const data = await resp.json();
        capaImagen.innerHTML=`<img src='${data["url"]}' alt="Imagen de la NASA">`;
    } catch (error) {
        alert(`No se se puede obtener la imagen. Error:${error}`);
    }
}

/**
 * Código principal
 */
window.addEventListener("DOMContentLoaded",(e)=>{
    var fecha=document.getElementById("fecha");
    var imagen=document.getElementById("imagen");
    //tomar de inicio la fecha actual
    let hoy=new Date();
    //fecha en formato yyyy-mm-dd
    let hoyAMD=`${hoy.getFullYear()}-${hoy.getMonth()+1}-`+
                `${hoy.getDay()+1}`;
    //pedimos la clave de desarrollador para conectar con la NASA    //fecha en formato yyyy-mm-dd
    var apikey=prompt("Escribe tu apikey para conectar con la NASA");
    //carga de la primera imagen
    obtenerImagen(apikey,hoyAMD,imagen);

    //si cambia la fecha, cambiamos la imagen
    fecha.addEventListener("change",(e)=>{
        obtenerImagen(apikey,fecha.value,imagen);
    });

})