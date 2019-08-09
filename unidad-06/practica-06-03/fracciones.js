Math.mcd=function(a,b){
    //debemos asegurarnos de que tenemos dos números
    //naturales, de otro modo devolvemos NaN
    //si hay decimales, los quitamos
    a=parseInt(Number(a));
    b=parseInt(Number(b));
    if(isNaN(a) || isNaN(b)) {
        return NaN;
    }
    //si algún número es cero, devolvemos cero
    else if(a==0 || b==0) return 0;
    //tomamos su valor positivo por si acaso
    a=Math.abs(a);
    b=Math.abs(b);

    //Algoritmo
    if(a%b!=0) return Math.mcd(b,a%b);
    else return b;
}

Math.mcm=function(a,b){
    //eliminamos errores de la misma forma que en el mcd
    a=parseInt(Number(a));
    b=parseInt(Number(b));
    if(isNaN(a) || isNaN(b)) {
        return NaN;
    }
    else if(a==0 || b==0) return 0;
    a=Math.abs(a);
    b=Math.abs(b);

    //resultado basado en el mcd
    return (a*b)/Math.mcd(a,b);
}

function Fraccion(numerador,denominador){
    //puesto que el numerador y denominador son privados
    //se declararan como variables de la función constructora
    var _numerador=numerador;
    var _denominador=denominador;
    //si no se envían buenos valores, revolvemos nulos
    if(isNaN(parseInt(Number(numerador)))) return null;
    if(isNaN(parseInt(Number(denominador)))) return null;
    
    //Los métodos sí serán públicos
    this.getNumerador=()=>_numerador;

    this.getDenominador=()=>_denominador;

    this.setNumerador=function(numerador){
        //solo cambiamos el numerador si el número es válido
        if(isNaN(parseInt(Number(numerador)))==false)
            _numerador=parseInt(numerador);//quitamos decimales
    };

    this.setDenominador=function(denominador){
        //solo cambiamos el denominador si el número es válido
        if(isNaN(parseInt(Number(denominador)))==false)
            _denominador=parseInt(denominador);//quitamos decimales
    };

    this.cambiarFraccion=function(numerador,denominador){
        //aprovechamos los métodos anteriores
        this.setNumerador(numerador);
        this.setDenominador(denominador);
    }

    this.toString=()=>(_numerador+"/"+_denominador);

    this.simplificar=function(){
        //si el numerador o denominador son cero, no simplificamos:
        if(_numerador!=0 && _denominador!=0){
            //miramos los signos
            if(Math.sign(_numerador)==Math.sign(_denominador)){
                // signos iguales ambos numeros les pasamos a positivos
                _numerador=Math.abs(_numerador);
                _denominador=Math.abs(_denominador);
            }
            else{
                //signos distintos, dejamos el numerador en negativo si no lo está
                if(_numerador>=0) {
                    _numerador=-_numerador;
                    _denominador=-_denominador;
                }
            }
            let mcd=Math.mcd(_numerador,_denominador);
            _numerador/=mcd;
            _denominador/=mcd;
        }
    }
    this.suma=function(f){
        let mcm=Math.mcm(_denominador,f.getDenominador());
        let denominadorRes=mcm;        
        let numeradorRes=(mcm/_denominador)*_numerador +
                          (mcm/f.getDenominador())*f.getNumerador();
        let res=new Fraccion(numeradorRes,denominadorRes);
        res.simplificar();
        return res;
    }
    this.resta=function(f){
        let mcm=Math.mcm(_denominador,f.getDenominador());
        let denominadorRes=mcm;
        
        let numeradorRes=(mcm/_denominador)*_numerador -
                         (mcm/f.getDenominador())*f.getNumerador();
        let res=new Fraccion(numeradorRes,denominadorRes);
        res.simplificar();
        return res;
    }   
    this.multiplica=function(f){
        let res=new Fraccion(
                    _numerador*f.getNumerador(),            
                    _denominador*f.getDenominador()
        );
        res.simplificar();
        return res;

    } 

    this.divide=function(f){
        let res= new Fraccion(
                    (_numerador*f.getDenominador()),            
                    (_denominador*f.getNumerador())
        );
        res.simplificar();
        return res;
    } 

}


var f1=new Fraccion(6,10);
var f2=new Fraccion(6,4);
var f3=new Fraccion(60,24);
f1.setNumerador(3); 
console.log(f1.toString()); //Escribe 3/10
console.log(f2.toString());//Escribe 6/4
console.log(f3.toString());//Escribe 60/24
f3.simplificar();
console.log(f3.toString()); //Escribe 5/2
var fSuma=f1.suma(f2);
var fResta=f1.resta(f2);
var fResta=f1.resta(f2);
var fMultiplica=f1.multiplica(f2);
var fDivide=f1.divide(f2);
console.log(fSuma.toString()); //Escribe 9/5
console.log(fResta.toString()); //Escribe -6/5
console.log(fMultiplica.toString()); //Escrobe 9/20
console.log(fDivide.toString()); //Escribe 1/5
