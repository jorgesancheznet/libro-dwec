let video=document.querySelector("video");
let info=document.getElementById("info");
video.controls=false;
video.play();
video.addEventListener("click",(ev)=>{
    if(video.paused) 
        video.play();
    else
        video.pause();
});
video.addEventListener("contextmenu",(ev)=>{
    let minutos=parseInt(video.duration/60);
    let segundos=parseInt(video.duration%60);
    ev.preventDefault();
    info.textContent=`Duración ${minutos}:${segundos}`;
    info.classList.toggle("mostrar");
})