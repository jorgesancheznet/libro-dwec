window.addEventListener("load",(e)=>{
    //recogida de elementos
    let mas=document.getElementById("mas");
    let menos=document.getElementById("menos");
    let por=document.getElementById("por");
    let entre=document.getElementById("entre");
    let ce=document.getElementById("ce");
    let n1=document.getElementById("numero1");
    let n2=document.getElementById("numero2");
    let resultado=document.getElementById("resultado");
    let inputs=document.getElementsByTagName("input");

    //eventos

    mas.addEventListener("click",(e)=>{
        resultado.value=
            parseFloat(n1.value) +parseFloat(n2.value);
    });
    menos.addEventListener("click",(e)=>{
        resultado.value=
            parseFloat(n1.value) - parseFloat(n2.value);
    });
    por.addEventListener("click",(e)=>{
        resultado.value=
            parseFloat(n1.value) * parseFloat(n2.value);
    });
    entre.addEventListener("click",(e)=>{
        resultado.value=
            parseFloat(n1.value) / parseFloat(n2.value);
    });
    //borrado de los cuadros
    ce.addEventListener("click",(e)=>{
        for(let input of inputs){
            input.value="";
        }
    });
});