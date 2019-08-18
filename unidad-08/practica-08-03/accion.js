var capa=document.getElementById("capa");
capa.addEventListener("mouseenter",(ev)=>{
    capa.style.backgroundColor="green";
});
capa.addEventListener("mouseleave",(ev)=>{
    capa.style.backgroundColor="transparent";
});
capa.addEventListener("mousedown",(ev)=>{
    if(ev.button==0)
        capa.style.backgroundColor="red";
    else if(ev.button==2)
        capa.style.backgroundColor="blue";
});
capa.addEventListener("mouseup",(ev)=>{
    capa.style.backgroundColor="green";
});

capa.addEventListener("contextmenu",(ev)=>{
    ev.preventDefault();
})