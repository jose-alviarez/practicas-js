// //?primera parte
// // Función para mostrar el menu y solicitar la eleccion al usuario
// function mostrarMenu() {
//   let eleccion = prompt(
//     "Bienvenido al restaurante. Elija una opcion del menu:\n1. Carne (viene acompañado con vino tinto )\n2. Pescado (viene acompañado con vino blanco)\n3. Verdura (viene acompañado con agua )"
//   );
//   //   seccion de opciones donde el usuario va a ingresar unicamente datos numericos
//   if (eleccion === "1") {
//     ofrecerBebida("carne");
//   } else if (eleccion === "2") {
//     ofrecerBebida("pescado");
//   } else if (eleccion === "3") {
//     ofrecerBebida("verdura");
//     //aqui mostrara un mensaje donde el usuario debe ingresar unicamente un valor de las opciones dadas
//   } else {
//     console.log("Opción inválida. Por favor, seleccione una opción válida.");
//     mostrarMenu();
//   }
// }

// // Función para ofrecer la bebida correspondiente de cada platillo
// function ofrecerBebida(platillo) {
//   let respuesta = prompt(
//     "Ha elegido " + platillo + ". ¿Desea la bebida?\n1. Si\n2. No"
//   );

//   //mensajes en base a la respuesta del usuario
//   if (respuesta === "1") {
//     if (platillo === "carne") {
//       console.log("Se le dio vino tinto como acompañante a su comida.");
//     } else if (platillo === "pescado") {
//       console.log("Se le dio vino blanco como acompañante a su comida.");
//     } else if (platillo === "verdura") {
//       console.log("Se le dio agua como acompañante a su comida.");
//     }
//     //este mesanje saldra luego de elegir que no quiere la bebida el usuario
//   } else if (respuesta === "2") {
//     console.log("No se ha querido la bebida.");
//   } else {
//     //este mensaje dara el error si intentan meter letras o un numero que no este en el rango asignado
//     console.log("Opcion invalida. Por favor, seleccione una opción valida.");
//     ofrecerBebida(platillo);
//   }
// }

// //resultado
// mostrarMenu();
//?primer parte-end

// ? ejercicio de samuel
// // solicitar al usuario que ingrese texto
// let texto = prompt("Ingresa una cadena de texto:");

// // iniciando una variable para que empiece a contar desde 0
// let contador = 0;

// // recorre cada letra de las palabras ingresadas
// for (let i = 0; i < texto.length; i++) {
//   // revisa que no sea un espacio en blanco
//   if (texto[i] !== " ") {
//     console.log(i);
//     // incremento del contador
//     contador++;
//   }
// }

// // resultado
// console.log("El número de letras en el texto es: " + contador);
// ? ejercicio de samuel-end

//?correccion del ejercicio anterior
// definiendo la funsion
// function calcularPotencia(base, exponente) {
//   // inicializando la variable
//   let resultado = 1;

//   // calculando la  potencia
//   for (let i = 0; i < exponente; i++) {
//     //    señalando que se va a multiplicar
//     resultado *= base;
//   }

//   // retorno del resultado resultado
//   return resultado;
// }

// // solicitando al usuario que ingrese la base y el exponente
// let base = parseFloat(prompt("Ingresa la base:"));
// let exponente = parseFloat(prompt("Ingresa el exponente:"));

// // revisando si el usuario ingreso numeros
// if (isNaN(base) || isNaN(exponente)) {
//   console.log("Error! Los parámetros deben ser números.");
// } else {
//   // llamada de la  función y mostrar el resultado
//   let resultado = calcularPotencia(base, exponente);
//   console.log("El resultado de la potencia es: " + resultado);
// }
// //?correccion del ejercicio anterior

// // ?quinta parte
// // solicitud de que el usuario ingrese un numero
// let numero = prompt("Ingresa un número:");

// // verificacion de que sea numeros
// if (!isNaN(numero)) {
//   // Convierte el numero a float
//   numero = parseFloat(numero);

//   // verifica si el numero es positivo o negativo
//   if (numero > 0) {
//     console.log("El número ingresado es positivo.");
//   } else if (numero < 0) {
//     console.log("El número ingresado es negativo.");
//   } else {
//     console.log("El número ingresado es cero (positivo)");
//   }
// } else {
//   console.log("El valor ingresado no es un número.");
// }
// // ?quinta parte-end
