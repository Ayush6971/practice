function solve(A) {
    if (A.length % 2 != 0 || A[0] % 2 != 0 || A[A.length - 1] % 2 != 0) return "NO"
    else return "YES"
}

console.log(solve([2, 4, 7, 8]))