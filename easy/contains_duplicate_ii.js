/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let numsMap = new Map(); // map for to keep track of the unique numbers we've encountered so far in the array

    for (let i = 0; i < nums.length; i++){ // iterate through each elem in the array
        let num = nums[i];  // just put nums[i] in a variable to make the code cleaner

        if (numsMap.has(num) && i - numsMap.get(num) <= k) { // check if num is already in the map (if it was encountered before) AND if the distance is <= k
            return true; // if it is then return true
        } else {
            numsMap.set(num, i); // if it's not then replace value of num in the map
        }
    }

    return false; // if no duplicate was found in the right distance then false will just be returned 

};

// time: O(n log(n)) - because we just iterate through the array (n) and we use the binary tree search to search the map
// space: 0(n) - we only store the unique numbers in the array so it's less than n (size of the array)


var containsNearbyDuplicate = function(nums, k) {
    let numsMap = new Map();

    for (let i = 0; i < nums.length; i++){
        let num = nums[i];

        if (numsMap.has(num) && i - numsMap.get(num) <= k) {
            return true;
        } else {
            numsMap.set(num, i);
        }
    }

    return false;
};