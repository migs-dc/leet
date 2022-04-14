/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    // two pointers,
    // p1 iterates through entire nums.
    // p2 looks for non-zeros to swap to the 0s that p1 finds
    
//     let p2 = 0;
    
//     for (let p1=0; p1<nums.length; p1++){
        
//     }
    
    let anchor = 0;
    for (let explorer = 0; explorer < nums.length; explorer++){ // iterate through all elems 
        if (nums[explorer] !== 0){          // if a non zero is found
            let temp = nums[anchor];        // swap anchor with explorer
            nums[anchor] = nums[explorer];
            nums[explorer] = temp;
            
            anchor++                        // move anchor
        }
    }
};