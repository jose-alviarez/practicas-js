// ? funcion que conatara el numero de palabras que el usario ingrese 
function contarLetras() {
    //ingreso de palabras 
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
    // ? -end