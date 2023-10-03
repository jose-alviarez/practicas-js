//? [12, 45, 67, 23, 89, 34, 56, 78, 9, 10, 46, 58, 11, 03, 23, 55, 96, 04, 
//? 53, 75, 96, 42, 07, 13, 01, 00, 41,  65, 88, 90, 10]; extraer todos los numeros 
//? divisibles de 7, se van a meter en un array, luego sumar todo los valores del array.

let array = [12, 45, 67, 23, 89, 34, 56, 78, 9, 10, 46, 58, 11, 03, 23, 55, 96, 04, 53, 75, 96, 42, 07, 13, 01, 00, 41, 65, 88, 90, 10];
let divisibles = [];
let suma = 0;

for (let i = 0; i < array.length; i++) {
  if (array[i] % 7 === 0) {
    divisibles.push(array[i]);
    suma += array[i];
  }
}

console.log(divisibles); 
console.log(suma); 

//? -end
