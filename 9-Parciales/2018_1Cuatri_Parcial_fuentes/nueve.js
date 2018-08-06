function mostrar()
{
var marca, peso, temperatura;
var informe;
var pares=0;
var pesado=0, marcap;
var frio=0;
var promep, sumap=0, cont=0;
var pesomax=0, pesomin=101;

while(informe!="no")
{
marca=prompt("Ingrese la marca del producto");
peso=prompt("Ingrese el peso del producto");
peso=parseInt(peso);
while(peso<1 || peso>100 || isNaN(peso))
    {
        peso=prompt("Ingrese un peso valido");
        peso=parseInt(peso);
     }
temperatura=prompt("Ingrese la temperatura de almacenamiento");
temperatura=parseInt(temperatura);
while(temperatura<-30 || temperatura>30 || isNaN(temperatura))
    {
        temperatura=prompt("Ingrese una temperatura valida");
        temperatura=parseInt(temperatura);
    }

if(temperatura%2==0)
    {
        pares++;
    }
if(peso>pesado)
    {
        pesado=peso;
        marcap=marca;
    }
if(temperatura<0)
    {
        frio++;
    }

sumap=sumap+peso;

if(peso>pesomax)
    {
        pesomax=peso;
    }
if(peso<pesomin)
    {
        pesomin=peso;
    }

cont++;
informe=prompt("Desea continuar?");
informe=informe.toLowerCase();

}

promep=sumap/cont;
document.write("La cantidad de temperaturas pares es de: " + pares);
document.write("<br>" + "La marca del producto mas pesado es: " + marcap);
document.write("<br>" + "La cantidad de productos que se conservan a menos de 0 grados es de: " + frio);
document.write("<br>" + "El promedio de peso de todos los productos es de: " + promep);
document.write("<br>" + "El peso máximo es: " + pesomax);
document.write("<br>" + "El peso minimo es: " + pesomin);
}
