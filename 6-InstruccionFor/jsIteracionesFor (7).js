function mostrar()
{
var numero;
var contdiv=0;
var divi=0, divip=0;


numero=prompt("Ingrese su numero");
numero=parseInt(numero);

for(let j=numero; j>1; j=j-1){
    if(j%2==0){
        contdiv++;
        divip=j-2;
        document.write("<br>" + divip)
    }else
        contdiv++;
        divi=j;
        document.write("<br>" + divi);  

    }



document.write("<br>" + "La cantidad de divisores de este numero es de: " + contdiv);
}//FIN DE LA FUNCIÓN