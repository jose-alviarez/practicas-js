//? multiplicar los numeros, sin incluir los ceros y pasar a positivo los numeros
 const array = [-52, 0, 44, 0, 59, 99, 83, 5, 3];
 let total = 1;

 function multiplicar() {
   for (let num of array) {
     if (num < 0) {
       num = -num;
     }
     if (num != 0) {
       total *= num;
     }
   }
   return total;
 }
 console.log(multiplicar());
//?-end