function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch (mesDelAño){
    case "Septiembre":
    case "Octubre":
    case "Noviembre":
    case "Diciembre":
    alert("a pasamos el frio, ahora calor!!!.");
    break;
    case "Julio":
    case "Agosto":
    alert("Abrigate que hace frio.");
    break;
    default:
    alert("Falta para el invierno.");
    break;

} 

}//FIN DE LA FUNCIÓN