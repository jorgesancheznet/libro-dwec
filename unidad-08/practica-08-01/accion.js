document.body.addEventListener("mousemove",function(ev){
    let cHola=document.getElementById("cHola");
    cHola.style.left=ev.clientX+"px";
    cHola.style.top=ev.clientY+"px";
});