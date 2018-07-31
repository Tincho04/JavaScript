function mostrar()
{
var nombre, sexo, edad;
var cont;
var cantf=0, cantm=0;
var menores=0, mayores=0, mayorm=0;
var edadmin=101, edadmax=0;
var sumf=0, summ=0, sumt=0;
var contf=0, contm=0;
var promf=0, promm=0, promt=0;
var nombrev, nombrej;
var sexov, mujerv;

for(cont=1; cont<=4; cont++){
nombre=prompt("Ingrese su nombre");

sexo=prompt("Ingrese su sexo");
sexo=sexo.toUpperCase();
while(sexo!="F" && sexo!="M")
    {
        sexo=prompt("Ingrese un sexo valido");
        sexo=sexo.toUpperCase();
}
edad=prompt("Ingrese su edad");
edad=parseInt(edad);
while(edad>=101 || edad<=0 || isNaN(edad))
    {
    edad=prompt("Ingrese una edad valida");
    edad=parseInt(edad);
    }

if (sexo=="F"){
    cantf++;
    sumf=sumf+edad;
    contf++
}else {
    cantm++;
    summ=summ+edad;
    contm++
}
if(edad>18){
    mayores++;
}else {
    menores++;
}
if(edad>18 && sexo=="M"){
mayorm++;
}

if(edad<edadmin){
    edadmin=edad;
    nombrej=nombre;
}
if(edad>edadmax){
    edadmax=edad;
    nombrev=nombre;
    sexov=sexo;
    if(sexo=="F"){
        mujerv=nombre;
    }
}

sumt=sumf+summ;

promf=sumf/contf;
promm=summ/contm;
promt=sumt/cont;


}

document.write("La cantidad de mujeres es de: " + cantf + "<br>" + " La cantidad de hombres es de: " + cantm + "<br>" + "La cantidad de mayores de edad es de: " + mayores + "<br>" + "La cantidad de menores de edad es de: " + menores + "<br>" + "La cantidad de hombres mayores de edad es de: " + mayorm + "<br>" + " La edad mas baja es: " + edadmin + "<br>" + " La edad mas alta es: " + edadmax + "<br>" + " El promedio de edad de mujeres es de: " + promf + "<br>" + " El promedio de edad de hombres es de: " +promm + "<br>" + " El promedio total es de: " + promt + "<br>" + " El nombre del mas viejo es: " + nombrev + "<br>" + " El nombre del mas joven es: " + nombrej + "<br>" + " El sexo del mas viejo es: " + sexov + "<br>" + " El nombre de la mujer mas vieja es: " + mujerv);

}

