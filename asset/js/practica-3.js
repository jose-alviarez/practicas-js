// //?primera parte
// // Función para mostrar el menu y solicitar la eleccion al usuario
// function mostrarMenu() {
//     let eleccion = prompt("Bienvenido al restaurante. Elija una opcion del menu:\n1. Carne (viene acompañado con vino tinto )\n2. Pescado (viene acompañado con vino blanco)\n3. Verdura (viene acompañado con agua )");
// //   seccion de opciones donde el usuario va a ingresar unicamente datos numericos 
//     if (eleccion === "1") {
//       ofrecerBebida("carne");
//     } else if (eleccion === "2") {
//       ofrecerBebida("pescado");
//     } else if (eleccion === "3") {
//       ofrecerBebida("verdura");
//     //aqui mostrara un mensaje donde el usuario debe ingresar unicamente un valor de las opciones dadas   
//     } else {
//       console.log("Opcion invalida. Por favor, seleccione una opcion valida.");
//       mostrarMenu();
//     }
//   }

  
//   // Función para ofrecer la bebida correspondiente de cada platillo
//   function ofrecerBebida(platillo) {
//     let respuesta = prompt("Ha elegido " + platillo + ". ¿Desea la bebida?\n1. Si\n2. No");
  
//     //mensajes en base a la respuesta del usuario 
//     if (respuesta === "1") {
//       if (platillo === "carne") {
//         console.log("Se le dio vino tinto como acompañante a su comida.");
//       } else if (platillo === "pescado") {
//         console.log("Se le dio vino blanco como acompañante a su comida.");
//       } else if (platillo === "verdura") {
//         console.log("Se le dio agua como acompañante a su comida.");
//       }
//     //este mesanje saldra luego de elegir que no quiere la bebida el usuario
//     } else if (respuesta === "2") {
//       console.log("No se ha querido la bebida.");
//     } else {
//     //este mensaje dara el error si intentan meter letras o un numero que no este en el rango asignado   
//         console.log("Opcion invalida. Por favor, seleccione una opción valida.");
//       ofrecerBebida(platillo);
//     }
//   }
  
//   // resultado
//   mostrarMenu();  
// //?primer parte-end




// ? refactorizacion de la primera parte
function mostrarMenu() {
  //mensaje donde el usuario va a escoger entre varias opciones
  let eleccion = prompt("Bienvenido al restaurante. elija una opcion del menu:\n1. Carne (viene acompañado con vino tinto )\n2. Pescado (viene acompañado con vino blanco)\n3. Verdura (viene acompañado con agua )");

  // lista de las opciones
  switch (eleccion) {
    case "1":
      ofrecerBebida("carne");
      break;
    case "2":
      ofrecerBebida("pescado");
      break;
    case "3":
      ofrecerBebida("verdura");
      break;
      //mensaje que saldra si no escoge ninguna opcion o si escribe otra cosa que no este en la lista
    default:
      console.log("Opcion invalida. Por favor, seleccione una opcion valida.");
      mostrarMenu();
      break;
  }
}

function ofrecerBebida(platillo) {
  // respuesta de la lista anterior donde nos mostrara la opcion de elegir bebida o no 
  let respuesta = prompt("Ha elegido " + platillo + ". Desea la bebida?\n1. Si\n2. No");

  // lista de las respuestas que da al escoger que el usuario escoge la bebida
  switch (respuesta) {
    case "1":
      switch (platillo) {
        case "carne":
          console.log("Se le dio vino tinto como acompañante a su comida.");
          break;
        case "pescado":
          console.log("Se le dio vino blanco como acompañante a su comida.");
          break;
        case "verdura":
          console.log("Se le dio agua como acompañante a su comida.");
          break;
      }
      break;
      // mensaje que saldra si no escoge la bebida
    case "2":
      console.log("No se ha querido la bebida.");
      break;
      //mensaje que saldra si el usuario mete un numero o letra que no sea acorde a los puestos en pantalla
    default:
      console.log("Opcion invalida. Por favor, seleccione una opción valida.");
      ofrecerBebida(platillo);
      break;
  }
}
//resultado
mostrarMenu();
//? refactorizacion de la primera parte-end



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

  //?tercera parte
  // mensaje para que el usuario ingrese la nota
  let nota = parseInt(prompt("Ingresa tu nota:"));

  //proceso de las notas que seran validas
  function convertirNota(nota) {
  if (nota >= 0 && nota <= 4) {
        return "Suspenso";
    } else if (nota >= 5 && nota <= 6) {
        return "Aprobado";
    } else if (nota >= 7 && nota <= 8) {
        return "Notable";
    } else if (nota >= 9 && nota <= 10) {
        return "Sobresaliente";
    } else {
      //mensaje que saldra si no es un numero valido o si ingresa palabras 
        return "Nota invalida";
    }
}

// vinculacion de las notas con los datos que ingreso el usuario
let calificacion = convertirNota(nota);
//respuesta del programa segun el dato ingresado  
console.log("Tu calificación es: " + calificacion);
//?tercera parte-end



//?cuarta parte
let montoCompra;

//se va a repetir el ciclo hasta que el usuario ingrese correctamente los datos
while (true) {
  // pedir al usuario que ingrese monto
  montoCompra = prompt("ingrese el monto de su compra:");

  // evita que el usuario pase sin ingresar un valor
  if (montoCompra === "") {
    console.log("No ingreso ningun monto. Por favor, intente de nuevo.");
    continue;
  }

  //ingresa solo numeros
  if (isNaN(montoCompra)) {
    console.log("el monto ingresado no es un numero valido. por favor, intenta de nuevo.");
    continue;
  }

  break;
}
// pasara numeros a decimales 
montoCompra = parseFloat(montoCompra);


//calculos de los descuentos
let descuento = 0;
if (montoCompra >= 100 && montoCompra <= 300) {
  descuento = montoCompra * 0.05;
} else if (montoCompra > 300 && montoCompra <= 500) {
  descuento = montoCompra * 0.1;
} else if (montoCompra > 500) {
  descuento = montoCompra * 0.15;
}

//descuento hecho
let totalPagar = montoCompra - descuento;

//resultados
console.log("Monto de la compra: €" + montoCompra);
console.log("Descuento aplicado: €" + descuento);
console.log("Total a pagar: €" + totalPagar);
//?cuarta parte-end


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


//?sexta parte
// pide al usuario el numero de filas de la piramide
let numeroFilas = prompt("ingresa el numero de filas de la pirámide:");

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






// ? ejercicio de samuel
function contarLetras() {
//ingreso de álabras que dara el usuario
  let texto = prompt("Ingresa un texto:");
  //el contador ira aumentando a partir de 0
  let contador = 0;
  
//proceso que solo hara que vaya aumentando el contador si son unicamente letras 
  for (let i = 0; i < texto.length; i++) {
   //revisa que no sea numeros
    if (isNaN(texto[i])) { 
      contador++;
    }
  }
  
  return contador;
}

let numeroDeLetras = contarLetras();
// respuesta de consola
console.log(numeroDeLetras);


// ? ejercicio de samuel-end




 
//?correccion del ejercicio anterior  
// definiendo la funsion 
function calcularPotencia(base, exponente) {
  
  // inicializando la variable
  let resultado = 1;
  
  // calculando la  potencia
  for (let i = 0; i < exponente; i++) {
//    señalando que se va a multiplicar 
    resultado *= base;
  }
  
  // retorno del resultado resultado
  return resultado;
}

// solicitando al usuario que ingrese la base y el exponente
let base = parseFloat(prompt("Ingresa la base:"));
let exponente = parseFloat(prompt("Ingresa el exponente:"));

// revisando si el usuario ingreso numeros
if (isNaN(base) || isNaN(exponente)) {
  console.log("Error! Los parámetros deben ser números.");
} else {
  // llamada de la  función y mostrar el resultado
  let resultado = calcularPotencia(base, exponente);
  console.log("El resultado de la potencia es: " + resultado);
}
//?correccion del ejercicio anterior  