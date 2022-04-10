/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    for (let i=0; i<nums.length; i++){      // iterate through nums
        if (nums[i] > target)  return i;    // edge case: if nums[0] < target return 1
        if (nums[i] === target) return i;   // if target found simply return i
        if (nums[i+1] > target || i+1 === nums.length){ 
            // if next elem is bigger than target simply return i+1 cause that's where it'll be. 
            // if next elem is outside the array then just return i+1 as well cause that's where the number would've been slotted
            return i+1;
        }
    }
};