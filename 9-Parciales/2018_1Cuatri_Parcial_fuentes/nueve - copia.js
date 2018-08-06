function mostrar()
{
var marca, peso, temperatura;
var cont; 
var duda;
var contpar=0, pesado=0, marcapes,contfrio=0;
var sumapeso=0, prompeso, contpeso=0;
var pesomax, pesomin;

for(cont=0; cont<1; cont+0)
 {
    marca=prompt("Ingrese la marca del producto");

    peso=prompt("Ingrese el peso del producto");
    peso=parseInt(peso);
    contpeso++;                     
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
     cont++;
    }
 if(cont==0)                                    // ej. f
    {
    pesomax=peso;
    pesomin=peso;
    }
 if(temperatura%2==0)                          // ej. a
    {
    contpar++;
    }
 if(peso>pesado)                              // ej. b
    { 
    pesado=peso;
    marcapes=marca;    
    }
 if(temperatura<0)                           // ej. c
     {
     contfrio++;
    }
 if(peso<pesomin)                           // ej. f
     {
     pesomin=peso;
     }
 if(peso>pesomax)                           // ej. f
     {
     pesomax=peso;
     }

sumapeso=sumapeso+peso;                      // ej. d   
}
prompeso=sumapeso/contpeso;                     // ej. d

document.write("La cantidad de temperaturas pares es de: " + contpar);
document.write("<br>" + "La marca del producto mas pesado es: " + marcapes);
document.write("<br>" + "La cantidad de productos que se conservan a menos de 0 grados es de: " + contfrio);
document.write("<br>" + "El promedio del peso es de: " + prompeso);
document.write("<br>" + "El peso màximo es: " + pesomax);
document.write("<br>" + "El peso minimo es: " + pesomin);
}
