/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
 var isSameTree = function(p, q) {
    if (p === null || q === null) return p === q;
        // check if either p and q are null and return whether they are both null

    if (p.val !== q.val) return false; 
        // if neither of them are null check if they have the same value
        // return false if they don't
    
    return isSameTree(p.right, q.right) && isSameTree(p.left, q.left);
        // if they are the same it means we can go deper in the tree. starting with the right recursively
};

var isSameTree = function(p, q) {
    if (p === null || q === null) return p === q;
    if (p.val !== q.val) return false;
    return isSameTree(p.right, q.right) && isSameTree(p.left, q.left);
};