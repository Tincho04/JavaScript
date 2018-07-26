/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 var edad;
 var sexo;
 var ecivil;
 var sueldb;
 var legajo;
 var nac;

edad=parseInt(prompt("Ingrese su edad"));                // ejercicio a
while(edad<10 || edad>90){
    edad=parseInt(prompt("Ingrese nuevamente la edad")); 
}
document.getElementById("Edad").value=edad;
sexo=prompt("Ingrese sexo F o M");                      // ejercicio b
while(sexo!="F" && sexo!="M"){
    sexo=prompt("Ingrese nuevamente el sexo");
}
document.getElementById("Sexo").value=sexo;
ecivil=prompt("ingrese su estado civil");      // ejercicio c
switch (ecivil){
    case "1":
    document.getElementById("EstadoCivil").value="Soltero";
    break;
    case "2":
    document.getElementById("EstadoCivil").value="Casado";
    break;
    case "3":
    document.getElementById("EstadoCivil").value="Divorciado";
    break;
    case "4":
    document.getElementById("EstadoCivil").value="Viudo";
    break;
    default:
    ecivil=prompt("ingrese un estado civil valido");
}
sueldb=prompt("Ingrese sueldo bruto"); 
sueldb=parseInt(sueldb);           // ejercicio d
while(sueldb<8000){
    sueldb=prompt("Ingrese nuevamente el sueldo bruto");
    sueldb=parseInt(sueldb)
}
document.getElementById("Sueldo").value=sueldb;
legajo=parseInt(prompt("ingrese numero de legajo"));       // ejercicio e
while(legajo<1000 || legajo>9999){
    legajo=prompt("Ingrese un numero de legajo valido");
}
document.getElementById("Legajo").value=legajo;
nac=prompt("Ingrese su nacionalidad");             // ejercicio f
while(nac!="A" && nac!="E" && nac!="N"){
        nac=prompt("Ingrese una nacionalidad valida");
    }                     
switch(nac){
    case "A":
    document.getElementById("Nacionalidad").value="Argentino";
    break;
    case "E":
    document.getElementById("Nacionalidad").value="Extranjero";
    break;
    case "N":
    document.getElementById("Nacionalidad").value="Nacionalizado";
    break;
}
}
