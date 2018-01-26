
/**
 * Remove Duplicates from Sorted Array
 * @param {number[]} nums
 * @return {number}

Given a sorted array, remove the duplicates in-place such that each element appear only once and return the new length. Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
*/

// const removeDuplicates = nums => {
//     return Array.from(new Set(nums))
// };

// const removeDuplicates = nums => {
//     return [...new Set(nums)];
// }

const removeDuplicates = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        let j = i + 1
        while (nums[i] === nums[j]) {
            nums.splice(j, 1)
        }
    }
    return nums
};