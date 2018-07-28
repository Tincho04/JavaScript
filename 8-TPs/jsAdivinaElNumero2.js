/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 numeroSecreto=Math.floor(Math.random()*(100)+1);
	 numeroSecreto=parseInt(numeroSecreto);
   contadorIntentos=0
	 console.log(numeroSecreto);

}

function verificar()
{
	var numero;
	numero=document.getElementById("numero").value;
	numero=parseInt(numero);
	contadorIntentos=contadorIntentos+1

 if(numero==numeroSecreto && contadorIntentos==1)
  {
    document.getElementById("intentos").value=("usted es un Psíquico");

  } else if(numero==numeroSecreto && contadorIntentos==2)
  { 
    document.getElementById("intentos").value=("excelente percepción");
  }else if(numero==numeroSecreto && contadorIntentos==3)
   {
     document.getElementById("intentos").value=("Esto es suerte");
	} else if(numero==numeroSecreto && contadorIntentos==4)
  { 
    document.getElementById("intentos").value=("Excelente técnica");
  }else if(numero==numeroSecreto && contadorIntentos==5)
   {
     document.getElementById("intentos").value=("usted está en la media");
	}
	else if(numero==numeroSecreto && contadorIntentos>=6 && contadorIntentos<=10)
  { 
    document.getElementById("intentos").value=("falta técnica");
  }else if(numero==numeroSecreto && contadorIntentos>10)
   {
     document.getElementById("intentos").value=("afortunado en el amor!!");
	}

}