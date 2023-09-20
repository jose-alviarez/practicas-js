//?segunda parte
// pide al usuario el valor
let basee = prompt("Ingresa la longitud de la base:");
let alto = prompt("Ingresa la altura:");

// verifica si los valores ingresados son numeros
if (isNaN(basee) || isNaN(alto)) {
  console.log("alguno de los valores ingresados no es valido.");
} else if (basee === "" || alto === "") {
  console.log("no ingresaste ningun valor.");
} else {
  // revisa si la base y el alto son iguales
  if (basee === alto) {
    console.log("es un cuadrado");
  } else if (basee > alto) {
    console.log("es un rectangulo horizontal");
  } else {
    console.log("es un rectangulo vertical");
  }
}
//?segunda parte-end