/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
function ComenzarIngreso () 
{
var numero;
var nropar, varimpar,

numero=document.getElementById("numero").value;
numero=parseInt("numero");
if(numero<0 || isNaN(numero))
    {
        alert("Ingrese un numero valido");
        numero=document.getElementById("numero").value;
        numero=parseInt("numero");
    }


}

function NumerosPares ()

{
for(let i=numero; i<=numero; i++)
    {
        if(i%2==0)
        nropar=i;
        console.log(nropar)
    }


}

