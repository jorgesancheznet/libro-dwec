function validarNIF(nif){
    const patron=/^[XYZ0-9][0-9]{7}[A-Z]$/;
    const VAL_LETRA="TRWAGMYFPDXBNJZSQVHLCKE";
    if(patron.test(nif)){
        let primeraCifra;
        let letra;
        let números;
        //valoramos el primer carácter
                if(nif[0]=='Y') primeraCifra=1;
        else if(nif[0]=='Z') primeraCifra=2;
        else if(nif[0]=='X') primeraCifra=0
        else primeraCifra=nif[0];
        //construimos el número
        números=Number(primeraCifra+nif.slice(1,8));
        letra=nif.slice(8);
        return VAL_LETRA[números%23]==letra;

    }
    else return false;
}

