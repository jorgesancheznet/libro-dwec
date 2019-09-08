/**
 * Crea una promesa que genera un mensaje en el 
 * tiempo indicado
 * @param {Number} tiempo ms
 */
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
/**
 * Crea una cuenta atrás en el elemento indicado
 * @param {number} numero Desde dónde contamos
 * @param {*} elemento En que elemento HTML escribimos
 * @param {*} tiempo ms en los que cambia cada número
 * @param {*} f Función opcional que queremos que se ejecute al final
 */
export async function cuenta(numero,elemento=document.body,tiempo=1000,f){
    try{
        for(let i=numero;i>=0;i--){
            await temporizador(tiempo);
            elemento.textContent=i;
        }
        if (f) f();
    }
    catch(e){
        console.log("Error "+e);
    }

}