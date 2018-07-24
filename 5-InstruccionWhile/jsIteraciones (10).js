function mostrar()
{

	var sumanega=0;
	var sumaposi=0;
	var cantposi=0;
	var cantnega=0;
	var cantcero=0;
	var cantpar=0;
	var promeposi;
	var promenega;
	var resta;
	var numero;
	//declarar contadores y variables 
	
	var respuesta="si";

	while(respuesta!="no")
	{
	numero=parseInt(prompt("Ingrese su numero"));	
	respuesta=prompt("¿Desea continuar?");

	if(numero==0){
		cantcero++ }else
		if(numero<0)
		{sumanega=numero+sumanega
		cantnega++}else
		{
			sumaposi=numero+sumaposi
			cantposi++}
			if(numero%2==0)
			{
				cantpar++
			}
		} 
promeposi=sumaposi/cantposi;
promenega=sumanega/cantnega;
resta=sumaposi-sumanega;
document.write(" Suma de negativos: " + sumanega + "<br>"  );
document.write(" Suma de positivos: " + sumaposi + "<br>");
document.write(" Cantidad de positivos: " + cantposi + "<br>");
document.write(" Cantidad de negativos: " + cantnega + "<br>");
document.write(" Cantidad de ceros: " + cantcero + "<br>");
document.write(" Cantidad de pares: " + cantpar + "<br>");
document.write(" Promedio de Positivos: " + promeposi + "<br>");
document.write(" Promedio de Negativos: " + promenega + "<br>");
document.write(" Diferencia entre positivos y negativos: " + resta);
}//FIN DE LA FUNCIÓN