/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    
    let p1 = m-1; // pointer for the last elem in nums1
    let p2 = n-1; // pointer for the last elem in nums2
    
    for (let i=nums1.length-1; i>=0; i--){ // iterate nums1 from the last elem
        if (p2 < 0) break; // exit for loop if nums2 has all been checked
        
        if (nums1[p1] > nums2[p2]){ 
            nums1[i] = nums1[p1];   // place nums1[p1] 
            p1--;                   // move p1
        } else {
            nums1[i] = nums2[p2];   // place nums2[p2] instead
            p2--;                   // move p2
        }
    }
    
    return nums1; // simply return nums1
};