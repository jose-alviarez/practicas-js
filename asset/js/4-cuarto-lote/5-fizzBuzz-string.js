//? funcion que recibe un numero y retorna un string segun:
//?"fizz" es multiplo de "3", "buzz" multiplo de "5", 
//?"fizzbuzz" si es multiplo de los dos  
function fizzBuzz() {
    let numero = prompt("ingresa un numero:");
  
    if (isNaN(numero)) {
      return "ingresa un valor numerico";
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

