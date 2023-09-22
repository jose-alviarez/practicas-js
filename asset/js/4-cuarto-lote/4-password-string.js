//? funcion que recibe un string y retorna un nuevo string donde se cambia
//? "a" por "4" , "e" por "3", "i" por "1", "o" por "0"  

//mensaje que le saldra al usario 
let password  =prompt("ingrese texto");
//se alojara los cambios aqui 
let nuevaPalabra = "";
//bucle para recorrer cada palabra que se quiere cambiar
for (let i = 0; i < password.length; i++) {
  let letra = password[i];
 
  // solo leera datos string
  if (isNaN(letra))
  // lista de los cambios de las letras 
  switch (letra) {
    case "a":
      nuevaPalabra += "4";
      break;
    case "e":
      nuevaPalabra += "3";
      break;
    case "i":
      nuevaPalabra += "1";
      break;
    case "o":
      nuevaPalabra += "0";
      break;
    default:
      nuevaPalabra += letra;
      break;
  
 }
}
//resultado
console.log(nuevaPalabra);
//? -end 


