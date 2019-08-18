let capa1=document.getElementById("capa1")
let capa2=document.getElementById("capa2")
capa1.addEventListener("drag",(ev)=>{
    capa1.style.opacity=.5;
});
capa1.addEventListener("dragend",(ev)=>{
    capa1.style.opacity=1;
    capa1.style.backgroundColor="transparent";
});
capa2.addEventListener("dragenter",(ev)=>{
    capa2.style.backgroundColor="red";
});
capa2.addEventListener("dragleave",(ev)=>{
    capa2.style.backgroundColor="transparent";
});
capa2.addEventListener("dragover",(ev)=>{
    ev.preventDefault();
});
capa2.addEventListener("drop",(ev)=>{
    document.body.removeChild(capa1);
    capa2.textContent="¡Lo has logrado!";
    capa2.style.backgroundColor="yellow";
});