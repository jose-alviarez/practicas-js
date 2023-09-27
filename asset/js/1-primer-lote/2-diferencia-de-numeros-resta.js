//? ejercicio de "resta" el cual debe ingresar dos valores, y el programa debe decir cuanta diferencia numerica hay entre ellas
let num1 = parseInt(prompt("Ingrese el primer numero para restar:"));
let num2 = parseInt(prompt("Ingrese el segundo numero para restar:"));
let diferencia = Math.abs(num1 - num2);
console.log("La diferencia entre los numeros es: " + diferencia);
//? -end