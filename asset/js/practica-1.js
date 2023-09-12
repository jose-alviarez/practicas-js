//? primera parte 
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
//? primera parte-end   


//? segunda parte
let num1 = parseInt(prompt("Ingrese el primer numero para restar:"));
let num2 = parseInt(prompt("Ingrese el segundo numero para restar:"));
let diferencia = Math.abs(num1 - num2);
console.log("La diferencia entre los numeros es: " + diferencia);
//? segunda parte-end

//? tercera parte
let array = [5, 3, 4, 6, 9, 10];
let mayor = array[0];
for (let i = 1; i < array.length; i++) {
  if (array[i] > mayor) {
    mayor = array[i];
  }
}
console.log("El numero mayor del arreglo es: " + mayor);
//? tercera parte-end


//? cuarta parte
let contraseña = "5663***hhjknc!";
let seguir = true;
while (seguir) {
  let intento = prompt("Ingrese una contraseña");
  if (intento == contraseña) {
    alert("Contraseña correcta");
    seguir = false;
  } else {
    alert("Contraseña incorrecta");
  }
}
//? cuarta parte-end