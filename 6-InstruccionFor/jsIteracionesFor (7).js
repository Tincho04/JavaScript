function mostrar()
{
var numero;
var contdiv=0;
var divi=0; 
var divip=0;


numero=prompt("Ingrese su numero");
numero=parseInt(numero);

for(let j=numero; j>1; j=j-1){
    if(numero%j==0){
        contdiv++;
        divip=j
        /*console.log(divip)*/
        document.write("<br>" + divip)
}
}
document.write("<br>" + "La cantidad de divisores de este numero es de: " + contdiv);
}//FIN DE LA FUNCIÓN