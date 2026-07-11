class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numberIndexMap = new Map();
        for (let i = 0; i < nums.length; i++) {
            const requiredNumber = target - nums[i];
            if (numberIndexMap.has(requiredNumber)) {
                return [numberIndexMap.get(requiredNumber), i];
            }
            numberIndexMap.set(nums[i], i);
        }
        return [];
    }
}

// time complexity: O(n)
// space complexity: O(1)
