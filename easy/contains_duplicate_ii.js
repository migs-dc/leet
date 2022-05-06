/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
*/
var containsNearbyDuplicate = function(nums, k) {
    let map = new Map()

    for (let i = 0 ; i < nums.length ; i++){
        let flag = map.has(nums[i])
        let diffGreaterthanK = ((i -map.get(nums[i]) ) <=k)
        
        if(flag && diffGreaterthanK ) return true
        else if (flag && !diffGreaterthanK ) map.set(nums[i],i)
        else map.set(nums[i],i)
    }
    return false
};