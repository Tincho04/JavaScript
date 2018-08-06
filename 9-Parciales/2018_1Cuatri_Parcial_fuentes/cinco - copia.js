function mostrar()
{
var planeta;
planeta=prompt("Ingrese un planeta del sistema solar");

switch(planeta){
    case "tierra":
                  alert("Acá vivimos");
                break;
    case "mercurio":
    case "venus":
                 alert("acá hace más calor");
                break;
    case "marte":
    case "jupiter":
    case "saturno":
    case "urano":
    case "neptuno":
                alert("acá hace más frio");
                break;
    default:
            alert("No es un planeta válido");
}
}
