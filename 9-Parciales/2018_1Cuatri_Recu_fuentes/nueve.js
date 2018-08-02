function mostrar()
{
var animal, peso, temperatura, respuesta;
var pares=0, pesado=0, nombrep, tempp=0;
var frio=0, sumapes=0, promepes, cont=0;
var pesofmax=-30, pesofmin=30;

while(respuesta!="no")
    {
animal=prompt("Ingrese el animal del zoologico");

peso=prompt("Ingrese el peso del animal");
peso=parseInt(peso);
while(peso<1 || peso>1000 || isNaN(peso))
    {
    peso=prompt("Ingrese un peso valido");
    peso=parseInt(peso);
    }   
    sumapes=sumapes+peso;

temperatura=prompt("Ingrese la temperatura en la cual vive el animal");
temperatura=parseInt(temperatura);
    while(temperatura<-30 || temperatura>30 || isNaN(temperatura)){
    temperatura=("Ingrese una temperatura real");
    temperatura=parseInt(temperatura);
    }

if(temperatura%2==0){
    pares++
}
if(peso>pesado)
{
    pesado=peso;
    nombrep=animal;
    tempp=temperatura;
}

if(temperatura<0){
    frio++;
   if(peso>pesofmax) 
   {pesofmax=peso}
   if(peso<pesofmin)
   {pesofmin=peso}
}


cont++;
respuesta=prompt("Desea continuar?");
    }

promepes=sumapes/cont;


document.write("La cantidad de temperaturas pares es de: " + pares);
document.write("<br>" + "El nombre y la Temperatura del animal mas pesado son: " + nombrep + " con " + tempp );
document.write("<br>" + "La cantidad de animales que viven a menos de 0 grados es de: " + frio);
document.write("<br>" + "El promedio de peso de todos los animales es de: " + promepes);
document.write("<br>" + "El peso màximo de los animales cuyas temperaturas son bajo cero es de: " + pesofmax);
document.write("<br>" + "El peso minimo de los animales cuyas temperaturas son bajo cero es de: " + pesofmin);

}
