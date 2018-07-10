function mostrar()
{
var numerouno;
var numerodos;
var igualdad;
var resultado;
var division;
var suma;
numerouno=prompt("Ingrese el primer numero");
numerodos=prompt("Ingrese el segundo numero");
numerouno=parseInt(numerouno);
numerodos=parseInt(numerodos);
igualdad=numerouno=numerodos;
resultado=numerouno+numerodos;

alert("El resultado es: "+ resultado );


if(igualdad){
alert("Ambos numeros son iguales. El primer numero es: " + numerouno  + " el segundo numero es: " + numerodos);

if(numerouno>numerodos){
    division=numerouno/numerodos;
    alert("el primer numero es mayor que el segundo, por tanto la división es: " + division);
}else{
    suma=numerouno+numerodos;
    alert("el primer numero es menor que el segundo, por tanto la suma es: " + suma);
    if(suma<50)
    {alert("la suma es: " + suma + " y es menor a 50")}
}
}
}

