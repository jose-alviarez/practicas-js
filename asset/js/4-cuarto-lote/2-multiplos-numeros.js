//?funcion que sirve para saber si el primer valor ingresado 
//?del usuario es multiplo del segundo valor que ingresen 
function esMultiplo() {
    //mensajes de inicio 
    let num = prompt("ingrese el primer numero:");
    let multiplo = prompt("ingrese el segundo numero:");
  
    // revisa que sean valores numericos
    if (isNaN(num) || isNaN(multiplo)) {
      console.log("ambos valores deben ser numericos");
      return;
    }  


    //mensaje que sale si el usuario no ingresa ningun valor
    if (num || multiplo ===""){
        console.log("no ha ingresado ningun valor");
        return;
    }


    // convierte los numeros a enteros
    num = parseInt(num);
    multiplo = parseInt(multiplo);
  
    // verifica si el numero es multiplo 
    if (num % multiplo === 0) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
  // resultado
  esMultiplo();
//?-end
