/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contador;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 
		//alert(numeroSecreto );
  numeroSecreto=Math.floor(Math.random()*(101-1)+1);
  numeroSecreto=parseInt(numeroSecreto);
  console.log(numeroSecreto);
  contador=0;
}

function verificar()
{
  var numero;
  numero=document.getElementById("numero").value;
  numero=parseInt(numero);
  contador=contador+1;
  if(numero==numeroSecreto)
  {
    document.getElementById("intentos").value=("Usted es un ganador!!! y solo le tomó " + contador + " Intentos");
  } else if(numero>numeroSecreto)
  { 
    document.getElementById("intentos").value=("Se pasó");
  }else
   {
     document.getElementById("intentos").value=("Le falta");
   }
}