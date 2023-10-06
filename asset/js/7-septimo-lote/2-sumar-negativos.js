//? cambiar los numeros negativos a positivos y luego sumar unicamente esos numeros
const array = [54, -12, -2, 1, 7, -15];
let sumar = 0;

for (let i = 0; i < array.length; i++) {
  if (array[i] < 0) {
    sumar += -array[i];
  }
}
console.log(sumar);
//?-end