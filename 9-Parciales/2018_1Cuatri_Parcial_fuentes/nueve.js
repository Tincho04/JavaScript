function mostrar()
{
var marca, peso, temperatura;
var cont; 
var duda;
var contpar=0, pesado=0;

for(cont=0; cont<=1; cont+0)
 {
    marca=prompt("Ingrese la marca del producto");

    peso=prompt("Ingrese el peso del producto");
    peso=parseInt(peso);
     while(peso<1 || peso>100 || isNaN(peso))
     {
        peso=prompt("Ingrese un peso valido");
        peso=parseInt(peso);
     }
    temperatura=prompt("Ingrese la temperatura");
    temperatura=parseInt(temperatura);
     while(temperatura<-30 || temperatura>30 || isNaN(temperatura))
     {
        temperatura=prompt("Ingrese una temperatura valida");
        temperatura=parseInt(temperatura);
     }
 duda=prompt("¿Desea continuar?");
 if(duda=="no")
  {
     cont==1;
  }
 }

 if(temperatura%2==0)
 {
 contpar++;
 }
 if(peso>pesado)
 { 
 pesado=peso;     
 }



document.write()
}
