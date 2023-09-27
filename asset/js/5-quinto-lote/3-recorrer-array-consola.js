//? recorrer array en la consola [1,[2,3],5,8,9,4,5,[89]] 

let arr = [1, [2, 3], 5, 8, 9, 4, 5, [89]];

let array = arr.flat();

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

//?end

