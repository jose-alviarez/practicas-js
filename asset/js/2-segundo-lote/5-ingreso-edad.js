//?programa donde el usuario ingresara su edad, si es mayor de edad pasara, sino mostrara cuantos años le faltan para entrar  
// ingreso de edad 
let edad = prompt("Ingresa tu edad");

// 
let mensaje = edad >= 18 ? "Puedes entrar" : "Debes esperar " + (18 - edad) + " años para entrar";

// mensaje de alerta
alert(mensaje);
//? -end