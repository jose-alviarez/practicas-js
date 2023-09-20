//? cuarta parte
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
//? cuarta parte-end