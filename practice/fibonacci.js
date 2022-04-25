function fibonacci(num){
    if(num <= 1) return num;
    return (num - 1) + (num - 2);
}

console.log(fibonacci(8))