//? ejercicio donde se debe ingresar un numero y debe saber si es un numero par o impar 
let numero = prompt("Ingrese un numero para saber si es par o impar:");
numero = Number(numero);
if(isNaN(numero)){
alert ('no es un numero valido')
}else{
  if (numero % 2 === 0) {
    console.log("El numero es par");
  } else {
    console.log("El numero es impar.");
  }
}
//? end   