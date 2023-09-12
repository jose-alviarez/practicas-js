//?primera parte
// mensaje para ingresar el numero de niveles
let numeroMaximoNiveles = parseInt(prompt("Ingrese el número máximo de niveles para la pirámide:"));
// proceso de la funsion
function imprimirPiramide(numeroNiveles) {
  for (let i = 1; i <= numeroNiveles; i++) {
      let linea = '';
      for (let j = 0; j < i; j++) {
        linea += '*';
      }
      console.log(linea);
    }
  }
// impresion de los niveles
imprimirPiramide(numeroMaximoNiveles);
  
  
//?primera parte-end

//?segunda parte
// Función para crear una tabla de multiplicar
function crearTabla(num) {
  // Verificar que el número sea válido
  if (isNaN(num) || num < 1 || num > 100000000000000) {
    // Mostrar un mensaje de error
    console.error("Ingresar solo numeros");
    // Terminar la función
    return;
  }
  // Crear una variable para almacenar la tabla
  let tabla = "";
  // Recorrer los números del 1 al 10
  for (let i = 1; i <= 10; i++) {
    // Calcular el producto del número 
    let producto = num * i;
    // Añadir una fila a la tabla 
    tabla += `${num} x ${i} = ${producto}\n`;
  }
  // Mostrar la tabla en la consola
  console.log(tabla);
}

// Pedir al usuario que ingrese un número
let numero = prompt("Ingrese un número para ver su tabla de multiplicar");
// Convertir el número a un valor numérico
numero = Number(numero);
// Llamar a la función con el número ingresado
crearTabla(numero);  
//?segunda parte-end

//?tercera parte
// ingreso de valores
const valor1 = parseFloat(prompt("Ingresa el primer valor para saber cual es mayor"));
const valor2 = parseFloat(prompt("Ingresa el segundo valor para saber cual es mayor"));

// eleccion de valores para saber cual es mayor
const mayor = valor1 > valor2 ? valor1 : valor2;

// mensaje de respuesta
console.log(`El mayor valor es: ${mayor}`);
//?tercera parte-end

//?cuarta parte
//valores iniciales
function potencia(base, exponente) {
  return Math.pow(base, exponente);
}

// Pedir al usuario que ingrese la base y el exponente
let base = prompt("Ingrese la base:");
let exponente = prompt("Ingrese el exponente:");

// Convertir los valores a números

base = Number(base);
exponente = Number(exponente);

// Llamar a la función potencia y mostrar el resultado
let resultado = potencia(base, exponente);
alert("El resultado de " + base + " elevado a " + exponente + " es " + resultado);
//?cuarta parte-end

//? quinta parte
// ingreso de edad 
let edad = prompt("Ingresa tu edad");

// 
let mensaje = edad >= 18 ? "Puedes entrar" : "Debes esperar " + (18 - edad) + " años para entrar";

// mensaje de alerta
alert(mensaje);
//? quinta parte 