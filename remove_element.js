/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    let p1 = 0; // points to our return value
    
    for (let p2=0; p2<nums.length; p2++){   // iterates through each elem our p2
        if (nums[p2] !== val){              // if p2 is pointing at an elem that isn't val
            nums[p1] = nums[p2];            // make p1 = p2
            p1++;                           // move p1
        } 
    }
    
    return p1;  //p1 will represent the length of the answer withing nums
};  