//?primera parte
// Función para mostrar el menu y solicitar la eleccion al usuario
function mostrarMenu() {
    let eleccion = prompt("Bienvenido al restaurante. Elija una opcion del menu:\n1. Carne (viene acompañado con vino tinto )\n2. Pescado (viene acompañado con vino blanco)\n3. Verdura (viene acompañado con agua )");
  
    if (eleccion === "1") {
      ofrecerBebida("carne");
    } else if (eleccion === "2") {
      ofrecerBebida("pescado");
    } else if (eleccion === "3") {
      ofrecerBebida("verdura");
    } else {
      console.log("Opción inválida. Por favor, seleccione una opción válida.");
      mostrarMenu();
    }
  }
  
  // Función para ofrecer la bebida correspondiente
  function ofrecerBebida(platillo) {
    let respuesta = prompt("Ha elegido " + platillo + ". ¿Desea elegir la bebida?\n1. Si\n2. No");
  
    if (respuesta === "1") {
      if (platillo === "carne") {
        console.log("Se le dio vino tinto como acompañante a su comida.");
      } else if (platillo === "pescado") {
        console.log("Se le dio vino blanco como acompañante a su comida.");
      } else if (platillo === "verdura") {
        console.log("Se le dio agua como acompañante a su comida.");
      }
    } else if (respuesta === "2") {
      console.log("No se ha seleccionado la bebida.");
    } else {
      console.log("Opcion invalida. Por favor, seleccione una opción valida.");
      ofrecerBebida(platillo);
    }
  }
  
  // Iniciar el programa
  mostrarMenu();  
//?primer parte-end

