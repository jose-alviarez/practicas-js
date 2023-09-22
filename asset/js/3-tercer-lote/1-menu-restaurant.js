// //?menu de restaurante, que el usuario eliga algo del menu y de opciones si quiere la bebida que viene con el platillo o no
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
// -end




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