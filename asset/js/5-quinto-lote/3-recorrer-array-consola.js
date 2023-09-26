//? recorrer array en la consola [1,[2,3],5,8,9,4,5,[89]] 

let arr = [1, [2, 3], 5, 8, 9, 4, 5, [89]];

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === 'object' && arr[i] !== null) {
    for (let j = 0; j < arr[i].length; j++) {
      console.log(arr[i][j]);
    }
  } else {
    console.log(arr[i]);
  }
}

//?end

