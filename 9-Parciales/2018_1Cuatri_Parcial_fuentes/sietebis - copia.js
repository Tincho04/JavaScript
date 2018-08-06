function mostrar()
{
var nota;
var sexo;
var cont=0;
var min=10;
var sexmin;
var acum=0;
var contm6=0;

for (cont=0;cont<5;cont++)
{
    nota=parseInt(prompt("Ingrese 5 notas"));
    acum=acum+nota

    while(nota<0 || nota>10)
    {
        nota=parseInt(prompt("Vuelva a ingresar la nota"));
    }
    sexo=prompt("Ingrese sexo");

    while(sexo!="f" && sexo!="m"){
        sexo=prompt("Vuelva a ingresar el sexo");
    }

    if(nota<min)
    {
        min=nota
        sexmin=sexo
    }
    if(nota>=6 && sexo=="m"){
        contm6++
    }

    }
promedio=acum/cont
alert("el promedio de notas es: " + promedio)
alert("la nota mas baja es: " + min + " y el sexo de esa nota es: " + sexmin);
alert("la cantidad de varones cuya nota es 6 o mas es de: " + contm6);
}

