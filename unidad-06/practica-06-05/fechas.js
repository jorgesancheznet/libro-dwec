function getFecha(fechaString){
    const VAL_FECHA_G=/(\d{2})\/(\d{2})\/(\d{4})/;
    let res=VAL_FECHA_G.exec(fechaString);
    if(res==null)
        return null;
    else{
        //exec extraerá en un array cada apartado entre 
        //paréntesis. Empezando por el elemento 1
        // Así en el 1 tendremos el día, en el 2 el mes
        // y en el 3 el año
        //Los objetos Date requieren pasar este orden al revés
        //Al mes hay que restarle 1
        return new Date(res[3],res[2]-1,res[1]);
    }
}

const VAL_FECHA=/\d{2}\/\d{2}\/\d{4}/;
var fecha1;
var fecha2;
do{
    fecha1=prompt("Escriba la primera fecha (formato dd/mm/yyyy)");
}while(VAL_FECHA.test(fecha1)==false);

do{
    fecha2=prompt("Escriba la segunda fecha (formato dd/mm/yyyy)");
}while(VAL_FECHA.test(fecha2)==false);

//getFecha devuelve una fecha, de esa fecha usamos el 
//método getTime para obtener los milisegundos desde 1970
//que representa esa fecha
let msFecha1=getFecha(fecha1).getTime();
let msFecha2=getFecha(fecha2).getTime();
//restamos los milisegundos y les pasamos a días
let diferencia=(msFecha1-msFecha2)/(1000*60*60*24);
alert(`La diferencia en días de esa fecha es ${diferencia}`);
