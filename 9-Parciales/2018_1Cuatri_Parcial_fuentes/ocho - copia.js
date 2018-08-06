function mostrar()
{
var letra;
var numero;
var anuncio;
var cont;
var pares=0;
var impares=0;
var ceros=0;
var cantposi=0;
var posi=0;
var promposi;
var sumanega=0;
var letramax;
var letramin;
var max=-100;
var min=100;

for(cont=0; cont<1; cont+0)
{
letra=prompt("Ingrese una letra");
numero=parseInt(prompt("Ingrese un número"));
    if(numero<-100 || numero>100){
        numero=parseInt(prompt("Ingrese un número válido"));
    }
    if(numero==0){
        ceros++;
        }else if(numero%2==0){
          pares++;
        }else{
           impares++;
        }
    if(numero>=0 && numero<100){
       posi=posi+numero;
       cantposi++;
        }else if(numero<0){
            sumanega=sumanega+numero;
        }    
    if(numero>max){
        max=numero;
        letramax=letra;
    }
    if(numero<min){
        min=numero;
        letramin=letra;
    }

anuncio=prompt("¿Desea continuar?");
if (anuncio=="no"){
    cont++;
}

}

promposi=posi/cantposi;

document.write("<br>" + "Cantidad de numeros pares: " + pares);
document.write("<br>" + "Cantidad de numeros impares: " + impares);
document.write("<br>" + "Cantidad de ceros: " + ceros);
document.write("<br>" + "Promedio de numeros positivos: " + promposi);
document.write("<br>" + "Suma de numeros negativos: " + sumanega);
document.write("<br>" + "El número máximo es: " + max + " Y su respectiva letra es: " + letramax);
document.write("<br>" + "El número mínimo es: " + min + " Y su respectiva letra es: " + letramin);
}
