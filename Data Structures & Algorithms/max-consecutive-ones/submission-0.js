class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let finalMaxAmount = 0;
        let count = 0;
        for (let i = 0; i < nums.length; i++) {
            count = (nums[i] === 1) ? count + 1 : 0;
            finalMaxAmount = Math.max(count, finalMaxAmount);
        }

        return finalMaxAmount;
    }
}
