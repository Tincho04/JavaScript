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
	var msg;
	//declarar contadores y variables 
	
	var respuesta="si";

	while(respuesta!="no")
	{
	numero=parseInt(prompt("Ingrese su numero"));	
	respuesta=prompt("¿Desea continuar?");

	while(isNaN(numero)){	numero=parseInt(prompt("Ingrese su numero"));	
	respuesta=prompt("¿Desea continuar?");
}

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
dif=cantposi-cantnega;
if(dif>0){
    msg=("Hay mas Positivos que Negativos por: " + dif);}else
	if (dif==0){
		msg=("Hay la misma cantidad de Positivos que de Negativos");
	}else 
	if(dif<0){
    msg=("Hay mas Negativos que Positivos por: " + dif*-1);}
	
document.write(" Suma de negativos: " + sumanega + "<br>"  );
document.write(" Suma de positivos: " + sumaposi + "<br>");
document.write(" Cantidad de positivos: " + cantposi + "<br>");
document.write(" Cantidad de negativos: " + cantnega + "<br>");
document.write(" Cantidad de ceros: " + cantcero + "<br>");
document.write(" Cantidad de pares: " + cantpar + "<br>");
document.write(" Promedio de Positivos: " + promeposi + "<br>");
document.write(" Promedio de Negativos: " + promenega + "<br>");
document.write(msg);
}//FIN DE LA FUNCIÓN