/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    p1 = 0;
    
    for (let i=0; i<nums.length; i++){
        if (nums[i] !== val){
            nums[p1] = nums[i];
            p1++;
        } 
    }
    
    return p1;
};