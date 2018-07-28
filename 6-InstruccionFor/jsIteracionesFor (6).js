function mostrar()
{
var cont;
var numero;
var contpar=0;
var pares;

numero=parseInt(prompt("Ingrese un numero"));
pares=parseInt(numero);
for (cont=0; cont<=numero; cont++){
 while(numero!=1){
     if(numero%2==0){
         contpar++;
         numero=numero-1;
     }else{
         numero=numero-1;
     }   
}
}
document.write("Se han encontrado: " + contpar + " numeros pares " + "<br>" + "Los numeros pares encontrados son: ")    
var par;

par=pares;


while (par>=1){
    if (pares%2!=0){
        par=par-1
        document.write("<br> " + par);
    }else{
        document.write("<br> " + par)
        par=par-2    
    }
    }

/*    if (pares%2==0){
    document.write("<br> " + par);
    par=par-2
}else{
    par=par-1
    document.write("<br> " + par)
}
if (par%2==0)
{document.write("<br> " + par);
par=par-2
}
}
/*for (cont2=0; cont<=pares; cont++){
    document.write("<br>" + par );
    par=par-2;

    if (par==0){}
} 

while (pares>=1){
if(pares%2==0){
    document.write("Los numeros pares encontrados son: " + pares, + (pares-2), );
}else{
   document.write("Los numeros pares encontrados son: " + (pares-1) );
}
}
  */ 



}//FIN DE LA FUNCIÓN
