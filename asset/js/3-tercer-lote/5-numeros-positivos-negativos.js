// ?quinta parte
// solicitud de que el usuario ingrese un numero
let numero = prompt("Ingresa un número:");

// verificacion de que sea numeros
if (!isNaN(numero)) {
  // Convierte el numero a float 
  numero = parseFloat(numero);

  // verifica si el numero es positivo o negativo
  if (numero > 0) {
    console.log("el numero ingresado es positivo.");
  } else if (numero < 0) {
    console.log("el numero ingresado es negativo.");
  } else {
    console.log("el numero ingresado es cero (positivo)");
  }
} else {
  console.log("el valor ingresado no es un numero.");
}
// ?quinta parte-end