//?sexta parte
// pide al usuario el numero de filas de la piramide
let numeroFilas = prompt("ingresa el numero de filas de la piramide:");
// verifica si el valor ingresado es un numero valido
if (isNaN(numeroFilas)) {
  console.log("El valor ingresado no es valido.");
} else {
  // convierte el valor ingresado a un numero entero
  numeroFilas = parseInt(numeroFilas);
  // impresion de la piramide en consola
  for (let i = numeroFilas; i >= 1; i--) {
    let fila = "";
    for (let j = 1; j <= i; j++) {
      fila += "* ";
    }
    console.log(fila);
  }
}
//?sexta parte-end