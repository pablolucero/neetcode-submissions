class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let counter = 0;
        let maxConsecutives = 0;
        for (const num of nums) {
            counter = num === 1 ? counter + 1 : 0; 
            maxConsecutives = Math.max(counter, maxConsecutives);
        }
        return maxConsecutives;
    }

    // TC: O(n), SC: O(1)

}
