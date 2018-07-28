/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
var numero1;
var numero2;
var calculo;
var resultado;
function comenzar()
{
numero1=Math.floor(Math.random()*(10)+1);
numero2=Math.floor(Math.random()*(10)+1);
numero1=parseInt(numero1);
numero2=parseInt(numero2);
calculo=Math.floor(Math.random()*(4)+1);
document.getElementById("PrimerNumero").value=numero1;
document.getElementById("SegundoNumero").value=numero2;
    switch(calculo){
        case 1:
    document.getElementById("Operador").value="Mas";
    resultado=numero1+numero2;
    break;
        case 2:
    document.getElementById("Operador").value="Menos";
    resultado=numero1-numero2;
    break;
        case 3:
    document.getElementById("Operador").value="Por";
    resultado=numero1*numero2;
    break;
        case 4:
        resultado=numero1/numero2;
        document.getElementById("Operador").value="Dividido";
    break;
}

}//FIN DE LA FUNCIÓN
function Responder()
{
respuesta=document.getElementById("Respuesta").value
if(respuesta==resultado)
{
    alert("Usted ha acertado el resultado");
comenzar()

}else{
    alert("Usted no ha dado con el resultado");
}

}//FIN DE LA FUNCIÓN
