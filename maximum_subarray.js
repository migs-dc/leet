53. Maximum Subarray
Easy

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.

var maxSubArray = function(nums) {
    
    let max = 0;
    
    for (let i=0; i<nums.length; i++){
        for (let j=i; j<i; i++){
            subArray = nums.slice(i, j+1);
           
            let sum = 0;
            for (let k=0; k<subArray.length; k++){
                sum = sum + subArray[k];
            }
            
            if ( sum > max ) {
                max = sum;
            }
        }
    }
    
    return max;
};