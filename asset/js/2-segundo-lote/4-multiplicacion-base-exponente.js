// //?cuarta parte
// //valores iniciales
// function potencia(base, exponente) {
//     return Math.pow(base, exponente);
//   }
  
//   // pedir al usuario que ingrese la base y el exponente
//   let base = prompt("Ingrese la base:");
//   let exponente = prompt("Ingrese el exponente:");
  
//   // convertir los valores a numeros
  
//   base = Number(base);
//   exponente = Number(exponente);
  
//   // llama a la funcion potencia y mostrar el resultado
//   let resultado = potencia(base, exponente);
//   alert("El resultado de " + base + " elevado a " + exponente + " es " + resultado);
//   //?cuarta parte-end


  //?correccion del ejercicio   
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
  console.log("error! Los parametros deben ser numeros.");
} else {
  // llamada de la  función y mostrar el resultado
  let resultado = calcularPotencia(base, exponente);
  console.log("el resultado de la potencia es: " + resultado);
}
//?correccion del ejercicio-end   