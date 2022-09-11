// function maxElement(Arr) {
//     let max = A[0], count = 0;
//     for (let i = 0; i <= A.length - 1; i++) {
//         if (max < A[i]) { max = A[i]; count = 1 }
//         else if (max === A[i]) count++
//     }
//     return A.length - count;
// }

function maxElement(A) {
    let max = A[0], min = A[0]
    for (let i = 0; i < A.length; i++) {
        if (max < A[i]) max = A[i]
        else if (min > A[i]) min = A[i]
    }
    return max + min;
}

console.log(maxElement([3, -3, 6, 8, 4, 7, 8, -2, 0]))