/*  Petición de datos */
let nombre=prompt("Escriba su nombre");
let apellidos=prompt("Escriba sus apellidos");
let edad=prompt("Escriba su edad");
let salario=prompt("Escriba su salario");

/*  valoramos el salario, empezamos con las
    situaciones a considerar cuando 
    el salario es menor de 1000 euros
*/
if(salario<1000){
    if(edad<30) 
        salario=1100;
    else if(edad<=45) //edad entre 30 y 45
        salario*=1.03; //subida de 3%
    else //más de 45 años
        salario*=1.15; //subida de un 15%        
}
else if (salario<=2000){
    //salario entre 1000 y 2000 euros
    if(edad>45)
        salario*=1.03;
    else
        salario*=1.1;
}
//escritura final
document.write(
    `<p>Persona: ${nombre} ${apellidos}, `+
    `edad: ${edad} años, salario: ${salario}`
);