/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
var largo;
var ancho;
var alambrer;
largo=document.getElementById("Largo").value;
ancho=document.getElementById("Ancho").value;
largo=parseInt(largo);
ancho=parseInt(ancho);
alambrer=((largo*2)+(ancho*2))*3;
alert("el rectangulo de alambre necesario es: " + alambrer);
}
function Circulo () 
{
var radio;
var alambrec;
radio=document.getElementById("Radio").value;
radio=parseInt(radio);
alambrec=((radio*2)*Math.PI)*3;
alert("el circulo de alambre necesario seria: " + alambrec);

}
function Materiales () 
{
var largo;
var ancho;
var cemento;
var cal;
largo=document.getElementById("Largo").value;
ancho=document.getElementById("Ancho").value;
largo=parseInt(largo);
ancho=parseInt(ancho);
cemento=(largo*ancho)*2;
cal=(largo*ancho)*3;
alert("el cemento necesario es: " + cemento + "y la cal necesaria es: " +cal);
}