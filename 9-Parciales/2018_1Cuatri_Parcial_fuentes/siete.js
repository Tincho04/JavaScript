function mostrar()
{
var nota, sexo, cont;
var sumanota=0, promenota;
var notamin=11, sexomin;
var varma6=0;

for(cont=0; cont<5; cont++)
    {
    nota=prompt("Ingrese la nota del alumno");
    nota=parseInt(nota);
    while(isNaN(nota) || nota<0 || nota>10)
        {
            nota=prompt("Ingrese una nota valida");
            nota=parseInt(nota);
        }
    sexo=prompt("ingrese el sexo del alumno");
    sexo=sexo.toUpperCase();
    while(sexo!="F" && sexo!="M")
        {
            sexo=prompt("Ingrese un sexo valido");
            sexo=sexo.toUpperCase();
        }
    sumanota=sumanota+nota;

    if(nota<notamin)
        {
            notamin=nota;
            sexomin=sexo;
        }
    if(sexo=="M" && nota>=6)
        {
            varma6++
        }
    
}
promenota=sumanota/cont;
alert("El promedio de las notas es de: " + promenota)
alert("La nota mas baja es: " + notamin + " El sexo de la nota mas baja es: " + sexomin)
alert("La cantidad de varones cuya nota ha sido de 6 o mas es de: " + varma6);
}

