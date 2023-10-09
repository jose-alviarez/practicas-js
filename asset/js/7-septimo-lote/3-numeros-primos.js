//? array  con los numeros primos hasta el 100

//se crea array vacio 
const primos = [];

//se hace el ciclo donde "i" se repite hasta que sea menor o igual a 100 
for (let i = 2; i <= 100; i++) {
   // se crea la variable con el valor verdadero  
  let esPrimo = true;
  // se crea otro ciclo con el valor "j" y este se va a repetir hasta que "j"
  // sea menor a "i"
  // aqui se revisa que sea "i" divisible con "j"
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
        //si el resultado es igual a 0 es porque "i" no es primo  
        // y creamos la funcion esPrimo con el valor false 
        esPrimo = false;
        //ya con esto se sale del ciclo
      break;
    }
  }
  // despues del bucle se verifica si esPrimo es true
  if (esPrimo) {
    // si es asi significa que es primo y se agrega con push al array
    primos.push(i);
  }
}

// se termina mostrando en consola  los resultados
console.log(primos);



//?-end



