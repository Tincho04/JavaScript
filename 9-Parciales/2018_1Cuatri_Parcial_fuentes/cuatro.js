function mostrar()
{
var numero1=parseInt(prompt("Ingrese el primer número"));
var numero2=parseInt(prompt("Ingrese el segundo número"));
var resta;
var suma;
if (numero1==numero2){
    alert("Ambos numeros son iguales " + numero1 + " y " + numero2);
}else if(numero1>numero2){
    resta=numero1-numero2;
    console.log(resta);
}else{
    suma=numero1+numero2;
    console.log(suma);
    if(suma>10){
        alert("La suma es: " + suma + " y superó el 10");
    }
}
}
