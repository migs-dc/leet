// 217. Contains Duplicate
// Easy

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// @param {number[]} nums
// @return {boolean}

//___________________________________________________//

// a faster method would be to sort the array first
// time: o(n log n)

// an even faster on would be using a hash map
// by sacrificing a little bit of space to improve time
// time: o(n)
// space: o(n)



// var containsDuplicate = function(nums) {
    
//     for(let i = 0; i < nums.length; i++){
//         for(let j = 0; j < i; j++){
//             if (nums[i] == nums[j]){
//                 return true;
//             }
//         }
//     }

//     return false;
// };

// var containsDuplicate = function(nums) {
    
//     let arr = [];
    
//     for(let i = 0; i < nums.length; i ++){
//         if (arr.includes(nums[i])){
//             return true;
//         }
//         arr.push(nums[i]);
//     }
    
//     return false;
// };