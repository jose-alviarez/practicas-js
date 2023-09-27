//? programa de ingreso de contraseña, donde se le permite 
//?al usuario pueda interactuar con la pagina si su clave es valida 
let contraseña = "5663***hhjknc!";
let seguir = true;
while (seguir) {
  let intento = prompt("Ingrese una contraseña");
  if (intento == contraseña) {
    alert("Contraseña correcta");
    seguir = false;
  } else {
    alert("Contraseña incorrecta");
  }
}
//? -end