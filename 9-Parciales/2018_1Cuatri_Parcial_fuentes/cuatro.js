function mostrar()
{
var numero1, numero2;
var resta, suma;

numero1=prompt("Ingrese el primer numero");
numero1=parseInt(numero1);
while(isNaN(numero1))
    {
        numero1=prompt("Ingrese un numero valido");
        numero1=parseInt(numero1);
    }
numero2=prompt("Ingrese el segundo numero");
numero2=parseInt(numero2);
while(isNaN(numero2))
    {
        numero2=prompt("Ingrese un numero valido");
        numero2=parseInt(numero2);
    }    
if(numero1==numero2)
    {
        alert("Ambos numeros son iguales: " + numero1 + ", " + numero2);
    }
if(numero1>numero2)
    {
        resta=numero1-numero2;
        alert("El primero numero es mayor por lo tanto su resta es: " + resta);
    }
if(numero1<numero2) 
    { 
        suma=numero1+numero2;
        if(suma>10)
            {
                alert("La suma es: " + suma + " y supero al 10");
            }
            else
                {
                    alert("El primer numero es menor por lo tanto su suma da: " + suma);
                }
        }

}
