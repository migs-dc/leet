// 53. Maximum Subarray
// Easy

// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
// A subarray is a contiguous part of an array.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    
    let max = nums[0];
    let sum = max;

    for (let i=1; i<nums.length; i++){ 
        if(sum + nums[i] > nums[i]){
            sum += nums[i];
        } else {
            sum = nums[i];
        }
        if (max < sum){
            max = sum;
        }
    }

    return max;
};

// var maxSubArray = function(nums) {
    
    // let max = nums[0];
    
    // for (let i=0; i<nums.length; i++){
    //     for (let j=i; j<nums.length; j++){
    //         let subArray = nums.slice(i, j+1);
    //         sum = 0;
            
    //         for (let k = 0; k < subArray.length; k++){
    //             sum = sum + subArray[k];
    //         }
            
    //         if (sum > max){
    //             max = sum;
    //         }
    //     }
        
    // }
    
    // return max;

// };