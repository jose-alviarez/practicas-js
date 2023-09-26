//? obten el numero menor del array [10,22,99,87,101,8,3,6]

let array = [10,22,99,87,101,8,3,6];
let menor = array[0];
for(let i = 1; i < array.length ; i++){
    if(array[i] < menor){
        menor = array[i];
    }
}
console.log("el numero menor del arreglo es " + menor)

//?end