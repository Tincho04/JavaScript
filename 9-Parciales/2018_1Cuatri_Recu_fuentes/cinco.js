function mostrar()
{
var dia=prompt("Ingrese un día de la semana");
switch(dia){

    case "lunes":
    case "martes":
    case "miercoles":
    case "jueves":
    case "viernes":
        alert("a trabajar.");
        break;
    case "sabado":
    case "domingo":
        alert("buen finde.");
        break;
    default:
        alert("no es un día válido.");
}

}
