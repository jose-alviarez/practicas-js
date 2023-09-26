//? funcion que recibe un numero y retorna un string segun:
//?"fizz" es multiplo de "3", "buzz" multiplo de "5", 
//?"fizzbuzz" si es multiplo de los dos  
function fizzBuzz() {
  let numero = Number (prompt("ingresa un numero:"));


  if (isNaN(numero)) {
    return "ingresa un valor numerico";
  }

  let resultado = "";

  if (numero % 3 === 0 && numero % 5 === 0) {
    resultado = "fizzbuzz";
  } else if (numero % 3 === 0) {
    resultado = "fizz";
  } else if (numero % 5 === 0) {
    resultado = "buzz";
  } else {
    resultado = numero;
    console.error("error")
  }

  return resultado;
}

console.log(fizzBuzz());
//?-end



