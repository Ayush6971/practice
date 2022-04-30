const array = [1,2,3,4,5];

const sum = array.reduce((accumulator, current) => accumulator + current)

let sum2 = 0;
for(let i=0;i<array.length;i++){
    sum2 += array[i]
}
console.log("🚀 ~ file: sumElementsinArray.js ~ line 3 ~ sum", sum)
console.log("🚀 ~ file: sumElementsinArray.js ~ line 8 ~ sum2", sum2)
