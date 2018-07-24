function mostrar()
{

	var contador=0;
	var numero=0;
	var respuesta='si';
	var suma=0;
while(respuesta=="si"){
	contador++
	numero=prompt("Ingrese un numero");
	numero=parseInt(numero);
	suma=suma+numero;
	respuesta=prompt("¿quiere continuar?");
}

document.getElementById('suma').value=suma;
document.getElementById('promedio').value=suma/contador;

}//FIN DE LA FUNCIÓN