function twoSum(nums, target) {
    const hmap = {}
    for (let i = 0; i < nums.length; i++) {
        let val = nums[i]
        let delta = target - val;
        let deltaIdx = hmap[delta]
        if (deltaIdx !== undefined && deltaIdx !== i) {
            return [deltaIdx, i]
        }
        hmap[val] = i;
    }
    return []
}

console.log(twoSum([4, 2, 6, 1], 5))