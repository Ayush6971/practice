function josephus(A) {
    let condition = Math.floor(Math.log(A) / Math.log(3))
    let killing = A - Math.pow(3, condition);
    return (3 * killing) + 1
}

console.log(josephus(7))