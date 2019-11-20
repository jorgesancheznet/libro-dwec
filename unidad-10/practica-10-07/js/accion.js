/**
 * Comprueba si está ya grabada en una cookie la imagen
 * favorita, si es así devuelve su número, y si no
 * deviuelve -1
 * @returns {number}
 */
function obtenerCookieImagen(){
    let arrayCookies=document.cookie.split("; ");
    for(let cookie of arrayCookies){
        let [nombre,valor]=cookie.split("=");
        if(nombre=="foto") return valor;
    }
    return -1;
}

/**
 * Requiere la imagen indicada
 * @param i Imagen a pedir
 * @param nCookie Número en la cookie
 * @returns {Promise<void>}
 */
async function cargarImagen(i,nCookie) {
    try {
        const resp = await fetch(ruta);
        const blob = await resp.blob();
    } catch (error) {
        //Solo indicamos el error en la consola
        console.log("Error: "+error);
    }
}

/**
 * Carga una nueva imagen, se indica el objeto de imagen
 * y un valor que indica si la imagen se debe desenfocar o no
 * @param imagen
 * @param desenfocar
 * @returns {Promise<void>}
 */
async function cargar(imagen,desenfocar=false){
    try{
        let i=imagen.dataset.i;
        let ruta=`https://picsum.photos/300/300?image=${i}`;
        if(desenfocar) ruta+="&blur";
        const resp = await fetch(ruta);
        const blob = await resp.blob();
        imagen.setAttribute("src",URL.createObjectURL(blob));
    }
    catch (error) {
        console.log("Error: "+error);
    }
}

let figura;
let imagen;
let ruta;
let main=document.querySelector("main");
var n=obtenerCookieImagen();
var desenfocada=null;
for(var i=1;i<=20;i++){
    ruta = `https://picsum.photos/300/300?image=${i}`;
    figura = document.createElement("figure");
    figura.classList.add("foto");
    imagen = document.createElement("img");
    imagen.setAttribute("alt","foto"+i);
    imagen.setAttribute("data-i",i);
    //comprobación de si hay que desenfocar la imagen
    if(i==n){
        ruta+="&blur";
        desenfocada=imagen;
    }

    imagen.setAttribute("src",ruta);
    //asignación del evento
    imagen.addEventListener("click",(e)=>{
        document.cookie=`foto=${e.target.dataset.i}`;
        cargar(desenfocada,false);
        cargar(e.target,true);
        //para marcar que esta es la nueva desenfocada
        desenfocada=e.target;
    });
    figura.appendChild(imagen);
    main.appendChild(figura);
}