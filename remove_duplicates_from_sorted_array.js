/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    k = 1;

    for (let i=0; i<nums.length-1; i++){
        if (nums[i] === nums[i+1]){
            nums[i+1] = "_";
            for (let j=i+1; j<nums.length-1; j++){
                let temp = nums[j];
                nums[j] = nums[j]+1;
                nums[j+1] = nums[j];
            }
        } else {
            k++;
        }
    }
    return k;
};


// feels really wasteful
// iterate through array
// if i === i+1
    // make i+1 = ""
    // swap i+1 with the next elem until it reaches the end
// if i != 1
    // k++


// return k