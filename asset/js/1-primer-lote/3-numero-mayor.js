//? programa donde se sepa cual es el numero mayor entre los numeros dados en desorden 
let array = [5, 3, 4, 6, 9, 10];
let mayor = array[0];
for (let i = 1; i < array.length; i++) {
  if (array[i] > mayor) {
    mayor = array[i];
  }
}
console.log("El numero mayor del arreglo es: " + mayor);
//? -end