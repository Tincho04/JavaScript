function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch (mesDelAño){
    case "Enero",   "Febrero", "Marzo", "Abril", "Mayo", "Junio":
    alert("Falta para el invierno.");
    break;
    case "Julio", "Agosto":
    alert("Abrigate que hace frio.");
    break;
    case "Septiembre", "Octubre", "Noviembre", "Diciembre":
    alert("a pasamos el frio, ahora calor!!!.");
    break;

} 

}//FIN DE LA FUNCIÓN