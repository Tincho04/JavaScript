function mostrar()
{

	var contador=0;
	var numero; 
	var max;
	var min;
	var bandera=true;

	// declarar variables
	
	var respuesta='si';

	while(respuesta!='no')
	{
		numero=parseInt(prompt("Ingrese su numero"));
		contador++
		if(bandera){
			bandera=false
		             max=numero
		             min=numero
	}
	if(numero>max){
		max=numero}else
		if(numero<min){
		min=numero}

		respuesta=prompt("¿Desea continuar?");


	}

document.getElementById("maximo").value=max
document.getElementById("minimo").value=min

}//FIN DE LA FUNCIÓN