

//?segunda parte
// funsion para crear una tabla de multiplicar
function crearTabla(num) {
    // revisa que sea valido el numero
    if (isNaN(num) || num < 1 || num > 100000000000000) {
      // muestra un mensaje de error
      console.error("Ingresar solo numeros");
      // termina la funsion
      return;
    }
    // variable
    let tabla = "";
    // limite del 1 al 10
    for (let i = 1; i <= 10; i++) {
      // calcular 
      let producto = num * i;
      // fila de la tabla 
      tabla += `${num} x ${i} = ${producto}\n`;
    }
    // resultado
    console.log(tabla);
  }
  
  //ingreso del numero del usuario
  let numero = prompt("Ingrese un numero para ver su tabla de multiplicar");
  // Convertir el numero
  numero = Number(numero);
  // llamar a la funcion con el numero ingresado
  crearTabla(numero);  
  //?segunda parte-end