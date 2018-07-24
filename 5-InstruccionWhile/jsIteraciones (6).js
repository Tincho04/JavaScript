function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero=0;
while (contador<5){
	numero=prompt("ingrese un numero");
    numero=parseInt(numero);
	acumulador=numero+acumulador;
	contador++;

}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN