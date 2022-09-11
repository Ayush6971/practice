
function solve(A) {
    let N = A.length, count_1 = 0, answer = 0, count = 0;
    for (let i = 0; i < N; i++) {
        if (A[i] == 1) count_1++;
    }

    for (let i = 0; i < N; i++) {
        if (A[i] == 0) {
            console.log("🚀 ~ file: maxConsecutive1.js ~ line 10 ~ solve ~ A[i]", i)
            let left_1 = 0, right_1 = 0;
            for (let j = i - 1; j >= 0; j--) {
                if (A[j] == 0) break;
                else if (A[j] == 1) left_1++
            }
            for (let k = i + 1; k < N; k++) {
                if (A[k] == 0) break;
                else if (A[k] == 1) right_1++
            }
            console.log("🚀 ~ file: maxConsecutive1.js ~ line 17 ~ solve ~ right_1", left_1, right_1)

            if (left_1 + right_1 == count_1) count = left_1 + right_1
            else if ((left_1 + right_1) < count_1) count = left_1 + right_1 + 1
        }
    }
    answer = Math.max(count, answer)
    return answer;
}

console.log(solve("11110000100111000101110010111101"))