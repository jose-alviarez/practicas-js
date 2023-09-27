//?funcion donde el usuario ingrese dos valores y el programa muestre cual numero es mayor
// ingreso de valores
const valor1 = parseFloat(prompt("ingresa el primer valor para saber cual es mayor"));
const valor2 = parseFloat(prompt("ingresa el segundo valor para saber cual es mayor"));

// eleccion de valores para saber cual es mayor
const mayor = valor1 > valor2 ? valor1 : valor2;

// mensaje de respuesta
console.log(`El mayor valor es: ${mayor}`);
//?-end