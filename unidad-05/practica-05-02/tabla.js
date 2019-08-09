function dibujaTabla(nFilas=10,nCols=4,color="black"){
    document.write(
        `<table style='border-collapse:collapse;`+
            `border:3px solid ${color};width:100%;'>`
    );
    for(let i=1;i<=nFilas;i++){
        document.write("<tr>");
        for(let j=1;j<=nCols;j++){
            document.write(
                `<td style='border:1px solid `+
                    `${color}'>&nbsp;</td>`
            );    
        }
        document.write("</td>");
    }
    document.write("</table>");
}