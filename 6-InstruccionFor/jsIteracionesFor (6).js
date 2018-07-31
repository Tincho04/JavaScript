function mostrar()
{

var numero;
var contpar=0;
var pares;
var acupar;

numero=parseInt(prompt("Ingrese un numero"));
pares=parseInt(numero);

if(numero%2!=0){
    numero=numero-1;
}
    document.write("Los numeros pares son: " + "<br> ");
for (let i=numero ; i > 1; i = i - 2) {
    contpar++;
    pares=i;

     if (pares>=0){
         document.write("<br>" + pares);
        pares=pares-2;   
    }
}
    document.write("<br>" + "La cantidad de numeros pares es de: " + contpar);
}

/*
for (var i=1; i<=num;i--){
    if(i%2==0)
    console.log(num);
    contador++
}      



/*    alert(pares);
}
    alert("la cantidad de numeros pares es de: " + contpar)
}
*/



/*
for (cont=0; cont<=numero; cont++){
 while(numero!=1){
     if(numero%2==0){
         contpar++;
         numero=numero-2;
     }else{
         numero=numero-1;
     }   
}
}
  
var par;

par=pares;


while (par>=2){
    if (pares%2!=0){
        par=par-1;
        document.write("<br> " + par);
    }else{
        document.write("<br> " + par)
        par=par-2;   
    }
    }*/

/*    if (pares%2==0){
    document.write("<br> " + par);
    par=par-2
    document.write("<br> " + par);
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



//FIN DE LA FUNCIÓN
