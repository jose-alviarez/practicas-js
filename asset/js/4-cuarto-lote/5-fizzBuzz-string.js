//? funcion que recibe un numero y retorna un string segun:
//?"fizz" es multiplo de "3", "buzz" multiplo de "5", 
//?"fizzbuzz" si es multiplo de los dos  


function fizzBuzz() {
    let numero = prompt("Ingresa un número:");
  
    if (isNaN(numero)) {
      return "Error: Ingresa un valor numérico sin letras.";
    }
  
    let resultado = "";
  
    switch (true) {
      case numero % 3 === 0 && numero % 5 === 0:
        resultado = "fizzbuzz";
        break;
      case numero % 3 === 0:
        resultado = "fizz";
        break;
      case numero % 5 === 0:
        resultado = "buzz";
        break;
      default:
        resultado = numero.toString();
        break;
    }
  
    return resultado;
  }
  
  console.log(fizzBuzz());
  




//?-end

