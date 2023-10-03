//? obten el numero menor del array [10,22,99,87,101,8,3,6]
let arr = [10, 22, 99, 87, 101, 8, 3, 6];
let menor = arr[0];
let i = 1;

while (i < arr.length) {
    if (arr[i] < menor) {
        menor = arr[i];
    }
    i++;
    
}
console.log("el numero menor es " + menor);
//?end


