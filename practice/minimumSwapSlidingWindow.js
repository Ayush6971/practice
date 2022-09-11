function slidingWindow(A, B) {
    let N = A.length, window = 0, swap = 0, answer = 0;
    for (let i = 0; i < N; i++) {
        if (A[i] <= B) window++
    }
    for (let j = 0; j < window; j++) {
        if (A[j] > B) {
            swap++
        }
    }
    answer = swap
    let s = 1, e = window;
    while (e < N) {
        if (A[s - 1] > B) {
            swap--
        }
        if (A[e] > B) {
            swap++
        }
        answer = Math.min(answer, swap)
        s++;
        e++;
    }
    return answer;
}
console.log(slidingWindow([52, 7, 93, 47, 68, 26, 51, 44, 5, 41, 88, 19, 78, 38, 17, 13, 24, 74, 92, 5, 84, 27, 48, 49, 37, 59, 3, 56, 79, 26, 55, 60, 16, 83, 63, 40, 55, 9, 96, 29, 7, 22, 27, 74, 78, 38, 11, 65, 29, 52, 36, 21, 94, 46, 52, 47, 87, 33, 87, 70]
    , 19))