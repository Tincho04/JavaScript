var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;

function comenzar()
{
eleccionMaquina=Math.floor(Math.random()*(3)+1);
eleccionMaquina=parseInt(eleccionMaquina);         // 1-piedra, 2-papel, 3-tijera


}//FIN DE LA FUNCIÓN
function piedra()
{
	if (eleccionMaquina==1){
		alert("empató");
		ContadorDeEmpates=ContadorDeEmpates+1;
	}else if(eleccionMaquina==2){
		alert("perdió");
		ContadorDePerdidas=ContadorDePerdidas+1;
	} else {
		alert("ganó");
		ContadorDeGanadas=ContadorDeGanadas+1;
	}
	eleccionMaquina=Math.floor(Math.random()*(3)+1);
	eleccionMaquina=parseInt(eleccionMaquina);
		
		mostrarResultado()
}//FIN DE LA FUNCIÓN
function papel()
{
if (eleccionMaquina==1){
    alert("ganó");
	ContadorDeGanadas=ContadorDeGanadas+1;
}else if(eleccionMaquina==2){
    alert("empató");
	ContadorDeEmpates=ContadorDeEmpates+1;
} else {
    alert("perdió");
	ContadorDePerdidas=ContadorDePerdidas+1;
}
       mostrarResultado()
eleccionMaquina=Math.floor(Math.random()*(3)+1);
eleccionMaquina=parseInt(eleccionMaquina);
}//FIN DE LA FUNCIÓN
function tijera()
{
if (eleccionMaquina==1){
    alert("perdió");
	ContadorDePerdidas=ContadorDePerdidas+1;
}else if(eleccionMaquina==2){
    alert("ganó");
	ContadorDeGanadas=ContadorDeGanadas+1;
} else {
    alert("empató");
	ContadorDeEmpates=ContadorDeEmpates+1;
}
eleccionMaquina=Math.floor(Math.random()*(3)+1);
eleccionMaquina=parseInt(eleccionMaquina);
}//FIN DE LA FUNCIÓN

function mostrarResultado()
{
document.getElementById("ganadas").value=("Usted ha ganado " + ContadorDeGanadas + " veces");
document.getElementById("perdidas").value=("Usted ha ganado " + ContadorDePerdidas + " veces");
document.getElementById("empatadas").value=("Usted ha empatado " + ContadorDeEmpates + " veces");
}