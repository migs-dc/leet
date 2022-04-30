/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
*/
var containsNearbyDuplicate = function(nums, k) {
    let map = new Map();
    if (!nums) {
        return false;
    }
   //store nums in map meanwhile,check and traverse nums array
    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) {
            map.set(nums[i], i);
            console.log("diff: " + i);
        }
        else {
           //already has num in map
           //so compare map ele's index with current i 
           //may has many duplicate, find valid one eg.[1,0,1,1] 1
            let diff = Math.abs(i - map.get(nums[i]));
            console.log("diffdd: " + diff);
            if (diff <= k) {
                return true;
            }
            else{
               map.set(nums[i], i); //update index find following possible valid diff
            }
        }
    }
    return false;
};