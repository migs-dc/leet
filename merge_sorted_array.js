/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    // if (m === 0) return nums2;
    // if (n === 0) return nums1;
    
    let p = 0;
    let temp;
    
    for (let i=0; i<m+n; i++){
        if (nums1[i] > nums2[p]){
            temp = nums1[i]
            nums1[i] = nums2[p];
            nums2[p] = temp;
        } 
        if ( nums1[i] === 0 ){
            nums1[i] = nums2[p];
            p++;
        }
    }
    
    return nums1;
};