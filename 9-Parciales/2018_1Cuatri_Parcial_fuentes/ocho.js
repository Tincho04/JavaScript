function mostrar()
{
var letra, numero;
var informe;
var pares=0, impares=0, ceros=0;
var sumaposi=0, contposi=0, promeposi; 
var sumanega=0;
var max=-101, letramax, min=101, letramin;

while(informe!="no")
{
letra=prompt("Ingrese una letra");
numero=prompt("Ingrese un numero");
numero=parseInt(numero);
while(isNaN(numero) || numero<-100 || numero>100)
    {
        numero=prompt("Ingrese un numero valido");
        numero=parseInt(numero);
    }
if(numero%2==0)
    {
        pares++;
    }else
        {
            impares++;
        }
if(numero==0)
    {
        ceros++;
    }
if(numero>=0)
    {
        contposi++;
        sumaposi=sumaposi+numero;
    }else
        {
            sumanega=sumanega+numero;
        }
if(numero>max)
    {
        max=numero;
        letramax=letra;
    }
if(numero<min)
    {
        min=numero;
        letramin=letra;
    }

informe=prompt("¿desea continuar? (para salir escriba: no)");
informe=informe.toLowerCase();

}
promeposi=sumaposi/contposi;
document.write("La cantidad de numeros pares es de: " + pares);
document.write("<br>" + "La cantidad de numeros impares es de: " + impares);
document.write("<br>" + "La cantidad de ceros es de: " + ceros);
document.write("<br>" + "El promedio de los numeros positivos es de: " + promeposi);
document.write("<br>" + "La suma de los numeros negativos es de: " + sumanega);
document.write("<br>" + "El numero y letra de máximo valor son: " + max + " y " + letramax);
document.write("<br>" + "El numero y letra de minimo valor son: " + min + " y " + letramin);
}
