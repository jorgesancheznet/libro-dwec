var array = []; //almacena las fotos de las personas
var temp = null; //temporizador
var cont = 0; //cuenta las veces que vamos cambiando las caras
const PASADAS = 100; //número total de pasadas
const RESULTADOS=1000; //número máximo de caras

function shuffle(a) {
    var j, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        //switch
        [a[i],a[j]]=[a[j],a[i]];
    }
}

function renderizar() {
    shuffle(array);
    let contenido=document.getElementById("contenido");
    contenido.innerHTML="";
    for (let i = 1; i <= 50; i++) {
        let img=document.createElement("img");
        img.setAttribute("src",array[i]);
        contenido.appendChild(img);
    }
    cont++;
    if (cont > PASADAS) {
        clearInterval(temp);
    }
}

async function cargarFotos(){
    try {
        const resp=await fetch(
            `https://randomuser.me/api?results=${RESULTADOS}`);
        const datos=await resp.json();
        let listaPersonas=datos["results"];
        for (persona of listaPersonas) {
            array.push(persona["picture"]["large"]);
        }
        temp = setInterval(renderizar, 200);
    }
    catch(error){
        document.body.innerHTML="<p>Error: "+error+"</p>";
    }
}

window.addEventListener("DOMContentLoaded",(e)=>{
    cargarFotos();

});