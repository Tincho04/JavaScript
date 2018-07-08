function mostrar()
{
//tomo la edad  
var edad;
var mensaje;
edad=document.getElementById("edad").value;
edad=parseInt(edad);
mensaje=edad==15;
if(mensaje)
{
    alert("niña bonita");
}
}//FIN DE LA FUNCIÓN