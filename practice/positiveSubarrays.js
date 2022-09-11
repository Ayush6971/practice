function positiveSubarrays(A) {
    let N = A.length, max_arr = [], max = Number.MIN_VALUE;
    let curr_arr = [];
    max_arr[0] = Number.MAX_VALUE;
    for (let i = 0; i < N; i++) {
        if (A[i] > 0) {
            curr_arr.push(A[i])
        } else {
            {
                if (max < curr_arr.length) {
                    max = curr_arr.length
                    max_arr = curr_arr;
                }
                curr_arr = []
            }
        }
    }
    if (max < curr_arr.length) {
        max = curr_arr.length
        max_arr = curr_arr;
    }
    return max_arr;
}

console.log(positiveSubarrays([-5173778, -8176176, 1694510, 7089884, -1394259, 1146372, -2502339, 1544618, 6602022, 4330572]))