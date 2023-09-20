  //?tercera parte
  // mensaje para que el usuario ingrese la nota
  let nota = parseInt(prompt("Ingresa tu nota:"));

  //proceso de las notas que seran validas
  function convertirNota(nota) {
  if (nota >= 0 && nota <= 4) {
        return "Suspenso";
    } else if (nota >= 5 && nota <= 6) {
        return "Aprobado";
    } else if (nota >= 7 && nota <= 8) {
        return "Notable";
    } else if (nota >= 9 && nota <= 10) {
        return "Sobresaliente";
    } else {
      //mensaje que saldra si no es un numero valido o si ingresa palabras 
        return "Nota invalida";
    }
}

// vinculacion de las notas con los datos que ingreso el usuario
let calificacion = convertirNota(nota);
//respuesta del programa segun el dato ingresado  
console.log("Tu calificación es: " + calificacion);
//?tercera parte-end