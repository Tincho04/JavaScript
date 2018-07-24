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
function comenzar()
{
numero1=Math.floor(Math.random()*(10)+1);
numero2=Math.floor(Math.random()*(10)+1);
numero1=parseInt(numero1);
numero2=parseInt(numero2);
calculo=Math.floor(Math.random()*(4)+1);

}//FIN DE LA FUNCIÓN
function Responder()
{
	

}//FIN DE LA FUNCIÓN
