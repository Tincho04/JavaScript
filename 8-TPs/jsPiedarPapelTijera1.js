/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;

function comenzar()
{
eleccionMaquina=Math.floor(Math.random()*(3)+1);
eleccionMaquina=parseInt(eleccionMaquina);
console.log(eleccionMaquina)  // 1-piedra, 2-papel, 3-tijera


}//FIN DE LA FUNCIÓN
function piedra()
{
    console.log(eleccionMaquina)
if (eleccionMaquina==1){
    alert("empató");
}else if(eleccionMaquina==2){
    alert("perdió");
} else {
    alert("ganó");
}
eleccionMaquina=Math.floor(Math.random()*(3)+1);
eleccionMaquina=parseInt(eleccionMaquina);

}//FIN DE LA FUNCIÓN
function papel()
{
    console.log(eleccionMaquina)

if (eleccionMaquina==1){
    alert("ganó");
}else if(eleccionMaquina==2){
    alert("empató");
} else {
    alert("perdió");
}
eleccionMaquina=Math.floor(Math.random()*(3)+1);
eleccionMaquina=parseInt(eleccionMaquina);
}//FIN DE LA FUNCIÓN
function tijera()
{
    console.log(eleccionMaquina)
if (eleccionMaquina==1){
    alert("perdió");
}else if(eleccionMaquina==2){
    alert("ganó");
} else {
    alert("empató");
}
eleccionMaquina=Math.floor(Math.random()*(3)+1);
eleccionMaquina=parseInt(eleccionMaquina);
}//FIN DE LA FUNCIÓN