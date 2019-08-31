export function temporizador(tiempo){
    var promesa=new Promise((resolver, rechazar)=>{
        var temp=setTimeout(()=>{
            clearTimeout(temp2);
            resolver("Tiempo concluido");
        },tiempo);
        var temp2=setTimeout(()=>{
            rechazar("El tiempo no va bien");
        },tiempo*2);
    });
    return promesa;
}

export async function cuenta(veces,elemento=document.body,tiempo=1000,f){
    try{
        for(let i=veces;i>=0;i--){
            await temporizador(tiempo);
            elemento.textContent=i;
        }
        if (f) f();
    }
    catch(e){
        console.log("Error "+e);
    }

}