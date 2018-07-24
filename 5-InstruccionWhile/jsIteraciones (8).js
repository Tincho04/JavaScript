function mostrar()
{

	var contador=0;
	var suma=0;
	var multiplicacion=1;
	var respuesta='si';
while(respuesta=="si"){
	acumulador=prompt("Ingrese su numero");
	acumulador=parseInt(acumulador);
if(acumulador>=0){
	suma=acumulador+suma;
}else{
	multiplicacion=acumulador*multiplicacion;
}
respuesta=prompt("¿desea continuar?");
}

document.getElementById('suma').value=suma;
document.getElementById('producto').value=multiplicacion;

}//FIN DE LA FUNCIÓN