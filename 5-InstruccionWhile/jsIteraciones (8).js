function mostrar()
{

	var contador=0;
	var positivo;
	var negativo;
	var suma=0;
	var multiplicacion=1;
	
	var respuesta='si';
while(respuesta=="si"){
	positivo=prompt("Ingrese su numero a sumar");
	positivo=parseInt(positivo);
	negativo=prompt("Ingrese su numero a multiplicar");
    negativo=parseInt(negativo);
	suma=positivo+suma;
	multiplicacion=negativo*multiplicacion;
	respuesta=prompt("¿desea continuar?");

}

document.getElementById('suma').value=suma;
document.getElementById('producto').value=multiplicacion;

}//FIN DE LA FUNCIÓN