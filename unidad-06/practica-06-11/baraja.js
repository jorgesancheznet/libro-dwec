/**
 * Constructor de cartas
 */
function Carta(valor,palo){

    this.valor=valor;
    this.palo=palo;

    //constantes estáticas
    Carta.OROS=1;
    Carta.ESPADAS=2;
    Carta.BASTOS=3;
    Carta.COPAS=4;

    /** Función estática que ayuda a traducir 
     * los valores de las cartas
     */
    Carta.traducirValor=function(valor){
        if(valor==1) return "As";
        else if(valor==8) return "Sota";
        else if(valor==9) return "Caballo";
        else if(valor==10) return "Rey";
        else return valor;
    };
    /** Función estática que ayuda a traducir 
     * los valores de los palos
     */
    Carta.traducirPalo=function(palo){
        if(palo==Carta.OROS) 
            return "Oros";
        else if(palo==Carta.ESPADAS) 
            return "Espadas";
        else if(palo==Carta.COPAS) 
            return "Copas";
        else if(palo==Carta.BASTOS) 
            return "Bastos";
        else return false;
    }
    /**
     * Modifica el valor de la carta
     * Retorna false si los parámetros no
     * son buenos
     */
    this.darValor=function(valor,palo){
        if( palo!=Carta.OROS && 
            palo!=Carta.ESPADAS && 
            palo!=Carta.BASTOS && palo!=Carta.COPAS)
            return false;
        else if(parseInt(valor)<1 && 
                parseInt(valor)>10) 
            return false;
        else{
            this.palo=palo;
            this.valor=parseInt(valor);
        }
    }
    this.toString=function(){
        return `${Carta.traducirValor(this.valor)} de `+
           `${Carta.traducirPalo(this.palo)}`;
    }

    //damos los valores, si no son buenos
    //no fabricamos el objetop
    if(this.darValor(this.valor,this.palo)==false) return null;
    else return this;
}

/****
 * Construcción de la baraja
 */
function Baraja(){
    //creación de la baraja
    const N_CARTAS=40;
    //variables
    let palo=1;
    let valor=1;

    var _baraja=new Array(N_CARTAS);
    //creamos las cartas    
    for(let i=0;i<N_CARTAS;i++){
        _baraja[i]=new Carta(valor,palo);
        //cuando hemos acabado un palo
        //el valor valdrá 10
        //Empezamos con el siguiente palo
        if(valor==10){
            valor=1;
            palo++;
        }
        else valor++;
    }
    
    /**Función de barajeo de las cartas */
    this.barajar=function(){
        //hacemos 100 intercambios de cartas
        for(let c=1;c<=100;c++){
            i=parseInt(Math.random()*N_CARTAS);
            j=parseInt(Math.random()*N_CARTAS);
            [_baraja[i],_baraja[j]]=[_baraja[j],_baraja[i]]
        }
    }
    this.toString=function(){
        let salida="";
        for(let c of _baraja){
            salida+=c.toString()+"\n";            
        }
        return salida;
    }
    //tras crear la baraja, la revolvemos
    this.barajar();
}

let b=new Baraja();
console.log(b.toString());
//volvemos a barajar
b.barajar();
console.log(b.toString());

