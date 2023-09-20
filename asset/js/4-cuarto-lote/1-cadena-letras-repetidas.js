//?primera parte
function crearCadena() {
    //letra que el usuario debe ingresar 
    let letra = prompt("ingrese una letra:");
    //numero de veces que se va a repetir 
    let numero = parseInt(prompt("ingrese el numero de veces que se va a repetir:"));
  
    // solo va a permitir numeros
    if (isNaN(numero)) {
      console.log("el valor ingresado no es un número válido.");
      return;
    }
  
    // no permitira mas de una letra 
    if (letra.length !== 1) {
      console.log("el valor ingresado no es una letra válida.");
      return;
    }
  
    //respuesta de veces que se repetira la letra
    let cadena = letra.repeat(numero);
    console.log("la cadena es:", cadena);
  }
  
  // resultado
  crearCadena();
//?primera parte-end
  