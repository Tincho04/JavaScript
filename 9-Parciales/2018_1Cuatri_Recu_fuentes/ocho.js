function mostrar()
{
var nombre, paginas, ventas, tema, respuesta;
var contpar=0, contimpar=0;
var ventacero=0;
var sumavent=0, promevent, cont=0;
var pagiprog=0;


while(respuesta!="no"){
    nombre=prompt("Ingrese el nombre del libro");

    paginas=prompt("Ingrese la cantidad de paginas");
    paginas=parseInt(paginas)
    while(paginas<0 || isNaN(paginas))
        {
            paginas=prompt("Ingrese un numero valido de paginas");
            paginas=parseInt(paginas);
        }
    ventas=prompt("Ingrese el numero de ventas");
    ventas=parseInt(ventas);
    while(ventas<0 || isNaN(ventas))
        {
            ventas=prompt("Ingrese un numero valido de ventas");
            ventas=parseInt(ventas);
        }
    tema=prompt("ingrese el tema del libro");
    while(tema!="robotica" && tema!="programacion" && tema!="patrones" && tema!="base de datos")
        {
            tema=prompt("Ingrese un tema valido entre robotica, programacion, patrones o base de datos");
        }
    

    if(paginas%2==0)
        {
            contpar++
        } else {
            contimpar++
        }
    if(ventas==0)
        {
            ventacero++
        }

    if(tema=="robotica")
        {
            pagiprog=pagiprog+paginas;
        }


cont++

sumavent=sumavent+ventas;

promevent=sumavent/cont;

respuesta=prompt("¿Desea continuar?");
}
document.write("La cantidad de libros con paginas pares es de: " + contpar);
document.write("<br>" + "La cantidad de libros con paginas impares es de: " + contimpar);
document.write("<br>" + "La cantidad de ceros ventas es de: " + ventacero);
document.write("<br>" + "El promedio de ventas ingresadas es de: " + promevent);
document.write("<br>" + "La suma de todas las paginas de libros de programacion es de: " + pagiprog);
}
