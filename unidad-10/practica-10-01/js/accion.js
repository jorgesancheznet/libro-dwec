/**
 * Valida que al menos haya dos caracteres
 * alfabéticos en el elemento 
 * (usa caracteres de lenguas españolas)
 * @param {Element} elemento 
 */
function validarNombre(elemento){
    //La expresión Unicode: /^\[p{Letter}]{2}/u
    //es mejor para validar, pero aun no es 
    //compatible con todos los navegadores    
    if(/^[A-Za-zñÑçÇáéíóúüÁÉÍÓÚÜüÀÈÌÒÙàèìòù]{2}/
                            .test(elemento.value)){
        elemento.classList.add("verde");
    }
    else{
        elemento.classList.remove("verde");
    }
    comprobarTodoValido();
}
/**
 * Valida que el Elemento contiene como 
 * valor un Email válido
 * Solo mira que haya alguna letra, una símbolo @
 * y otra letra
 * @param {Element} elemento 
 */
function validarEmail(elemento){
    if(/.*[A-Za-z].*@.*[A-Za-z].*/.test(elemento.value)){
        elemento.classList.add("verde");
    }
    else{
        elemento.classList.remove("verde");
    }
    comprobarTodoValido();
}
/**
 * Acude al servicio de internet de validación
 * de NIFs para validar la corrección del mismo
 * @param {Element} elemento 
 */
function validarNIF(elemento){
    //Preparación del parámetro
    let formData=new FormData();
    formData.append("nif",elemento.value);    
    
    fetch(`https://jorgesanchez.net/servicios/validarNIF.php`,{
        method:"POST",
        body:formData

    })
    .then(resp=>{
        return resp.json();
    })
    .then(datos=>{
        if(datos.error.codigo==0){
            elemento.classList.add("verde");
        }
        else{
            elemento.classList.remove("verde"); 
        }
        comprobarTodoValido();

    })
    .catch(error=>{
        document.getElementById("error").textContent=error;
        comprobarTodoValido();
    })
}

/**
 * Comprueba si todo el formulario es válido
 * para activar el botón
 */
function comprobarTodoValido(){
    if( 
        nombre.classList.contains("verde") && 
        apellidos.classList.contains("verde") && 
        email.classList.contains("verde") && 
        NIF.classList.contains("verde")
    ){
        //todo es correcto
        boton.disabled=false;        
    }
    else{
        boton.disabled=true; 
    }
}


window.addEventListener("load",(ev)=>{
    var nombre=document.getElementById("nombre");
    var apellidos=document.getElementById("apellidos");
    var email=document.getElementById("email");
    var NIF=document.getElementById("NIF");
    var boton=document.getElementById("boton");  
    var telon=document.getElementById("telon");
    var mensaje=document.getElementById("mensaje"); 

    nombre.addEventListener("keyup",(ev)=>{
        validarNombre(nombre);
    });
    apellidos.addEventListener("keyup",(ev)=>{
        validarNombre(apellidos);
    });
    email.addEventListener("keyup",(ev)=>{
        validarEmail(email);
    });
    NIF.addEventListener("keyup",(ev)=>{
        validarNIF(NIF);        
    });    

    boton.addEventListener("click",(ev)=>{
        ev.preventDefault();
        //Damos por hecho que si el botón está
        //activo, los datos son válidos
        telon.style.display="block";
        mensaje.style.display="block";
    });

    //Con el clic en el telon o en el mensaje,
    //empezamos de nuevo
    telon.addEventListener("click",(ev)=>{
        location="index.html";
    })
    mensaje.addEventListener("click",(ev)=>{
        location="index.html";
    })
});