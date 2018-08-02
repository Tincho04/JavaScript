function mostrar()
{
var notas, edad, sexo;
var sumanot=0, promenot, cont;
var notamin=11, sexomin;
var varmay6=0;
var edadmin, sexoj, notaj; 
var pmujered, pmujernot;

for(cont=0; cont<5; cont++)
    {
        notas=prompt("Ingrese la nota del alumno");
        notas=parseInt(notas);
        while(notas<0 || notas>10 || isNaN(notas))
            { 
                 notas=prompt("Ingrese una nota valida");
                 notas=parseInt(notas);
            }
        edad=prompt("Ingrese la edad del alumno");
        edad=parseInt(edad);
        while(isNaN(edad))
            {
                edad=prompt("Ingrese una edad numerica");
                edad=parseInt(edad); 
            }

        
        sexo=prompt("Ingrese el sexo del alumno");
        sexo=sexo.toLowerCase();
        while(sexo!="f" && sexo!="m")
            {
                sexo=prompt("Ingrese un sexo valido");
                sexo=sexo.toLowerCase();
                }

        sumanot=sumanot+notas;

        if(nota<notamin)
            {
                notamin=nota;
                sexomin=sexo;
            }
        if(sexo=="m" && edad>18 && nota>=6 )
            {
                varmay6++
            }
        if(cont=0)
            {
                edadmin=edad
            }
        if(edad<edadmin)
            {
            sexoj=sexo;
            notaj=nota;
            }
    }
promenot=sumanot/cont;
document.write("El promedio de las notas totales es de: " + promenot);
document.write("<br>" + "La nota y el sexo de la nota mas baja son: " + notamin + " y " + sexomin);
document.write("<br>" + "La cantidad de varones mayores de 18 cuya nota ha sido 6 o mas es de: " + varmay6);
document.write("<br>" + "El sexo y la nota de la persona mas joven es: " + sexoj + " y " + notaj);
document.write("<br>" + "");
}
