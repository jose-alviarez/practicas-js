//?programa que hara una fila de asteriscos segun ingrese el usuario 
// mensaje para ingresar el numero de niveles
let numeroMaximoNiveles = parseInt(prompt("ingresa el numero de filas de la piramide:"));
// proceso de la funsion
function imprimirPiramide(numeroNiveles) {
  for (let i = 1; i <= numeroNiveles; i++) {
      let linea = '';
      for (let j = 0; j < i; j++) {
        linea += '*';
      }
      console.log(linea);
    }
  }
// impresion de los niveles
imprimirPiramide(numeroMaximoNiveles);
//?-end