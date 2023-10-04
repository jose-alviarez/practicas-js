//? recorrer array en la consola [1,[2,3],5,8,9,4,5,[89]]   
// let array = [1,[2,3],5,8,9,4,5,[89]];

// for (let i = 0; i < array.length; i++){
//     let fila = array[i];

//     if (Array.isArray(fila)) {
//         for (let j = 0; j < fila.length; j++){
//             console.log(fila[j]);
//         }
//     } else {
//         console.log(fila);
//     }
// }

//?end


//?otro metodo

let array = [1,[2,3],5,8,9,4,5,[89]]

for(let h = 0; h < array.length; h++){
    const element = array [h];
    if (element.length == undefined){
        console.log(element);
    }else{
        for(let j = 0; j < element.length; j++){
            const result = element [j];
            console.log(result);
        }
    }

}



//?-end
