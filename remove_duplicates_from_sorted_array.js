/**
 * @param {number[]} nums
 * @return {number}
*/

// try reframing the question because this problem actually just asks for a unique element array
// within nums so whatever comes after doesn't matter

 var removeDuplicates = function(nums) { 
    if (nums.length === 0) return 0; // return 0 if array is empty
    
    let p1 = 0; // pointer 1 on first element
    
    for (let p2 = 1; p2 < nums.length; p2++){   // for loop for pointer two starting at 2nd elem
        if (nums[p1] !== nums[p2]){             // if p1 is the same as p2 move p1 
            p1++;                               // make the elem after p1
            nums[p1] = nums[p2];                // equal to p2
        }
    }
    
    return p1 + 1; // increment p1 by 1 to get the length of the non repeating elems
};

// 2 pointer solution

    // p1 = 0
    // p2 = 1

    // while p2 < nums.length
    //     if p1 = p2
    //         nums[p1+1] = nums[p2]
    //         p1++
    //         p2++
    //     else
    //         p2++
    // end
    // return p1+1

// brute force pseudo code

    // iterate through array
    // if i === i+1
        // make i+1 = ""
        // swap i+1 with the next elem until it reaches the end
    // if i != 1
        // k++
// return k

//old answer didn't work
// var removeDuplicates = function(nums) {
//     k = 1;

//     for (let i=0; i<nums.length-1; i++){
//         if (nums[i] === nums[i+1]){
//             nums[i+1] = "_";
//             for (let j=i+1; j<nums.length-1; j++){
//                 let temp = nums[j];
//                 nums[j] = nums[j]+1;
//                 nums[j+1] = nums[j];
//             }
//         } else {
//             k++;
//         }
//     }
//     return k;
// };