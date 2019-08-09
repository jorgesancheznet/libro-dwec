let nombre, contraseña;
//centinela para saber si el usuario cancela un cuadro
let seguir=true; 
//centinela que avisa de la correccion del nombre
let nombreOK;
//centinela que avisa de la correccion de la contraseña
let conmtraseñaOK;
//centinelas de cada premisa para la contraseña
let hayMinúsculas=false;
let hayMayúsculas=false;
let hayNúmeros=false;
let hayOtros=false;

//strings con las letras
const minusculas=
   "aáàbcçdeéèfghiíìjklmnñoóòppqrstuúüùvwxyz";   
const números="0123456789";

//peticion de nombre de usuario
do{
    nombre=prompt("Escriba su nombre de usuario deseado");
    if(nombre==null) seguir=false;
    if(seguir){
        //validación del usuario
        nombreOK=true;
        let i=0;
        while(nombreOK && i<nombre.length){
            let caracter=nombre.charAt(i);
            //validamos si alguna letra minúscula del 
            //español
            if(minusculas.indexOf(caracter)==-1){
                //no se encontró el carácter en las minúsculas
                nombreOK=false;
                alert("El usuario es incorrecto\n"+
                      "Solo se admiten minúsculas");
            }
            i++;
        }
    }
}while(seguir==true && nombreOK==false);

if(seguir){
    //peticion de nombre de contraseña
    do{
        hayMinúsculas=false;
        hayMayúsculas=false;
        hayNúmeros=false;
        hayOtros=false;
        contraseña=prompt("Escriba su contraseña deseada");
        if(contraseña==null) seguir=false;
        if(seguir){
            //validación de contraseña
            contraseñaOK=true;
            let i=0;
            while(contraseñaOK && i<contraseña.length){
                let caracter=contraseña.charAt(i);
                //validamos si hay alguna letra minúscula
                if(minusculas.indexOf(caracter)!=-1){
                    hayMinúsculas=true;
                }
                //validamos si hay alguna letra mayúscula
                else if(minusculas.toUpperCase().indexOf(caracter)!=-1){
                    hayMayúsculas=true;
                }
                //validamos si hay algún número
                else if(números.indexOf(caracter)!=-1){
                    hayNúmeros=true;
                }
                else {//es otro tipo de carácter
                    hayOtros=true;
                }
                i++;
            }
            contraseñaOK=(
                hayMinúsculas==true && hayMayúsculas==true && 
                hayNúmeros==true && hayOtros==true
            );
            if(contraseñaOK==false){
                alert("La contraseña es incorrecta\n"+
                "Debe contener minúsculas, mayúsculas,"+
                " números y otros símbolos");
            }
        }
        //Este es un código de comprobación
        //es interesante para comprobar
        //como va la validación por consola
        console.log(
            "Mayusculas :"+hayMayúsculas+
            ", Minúsculas :"+hayMinúsculas+
            ", Números :"+hayNúmeros+
            ", Símbolos :"+hayOtros
        );
    }while(seguir==true && contraseñaOK==false);
}
//mensajes finales
if(seguir==true){
    document.write("<p>Datos almacenados</p>");
}
else{
    document.write("<p>El usuario canceló la operación</p>");
}
