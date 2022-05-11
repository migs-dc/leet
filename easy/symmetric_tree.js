/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (root === null) return true; // edge case
    
    return isMirror(root.left, root.right); // since there is no need to check the root we just use a helper function
        //and that function is what goes on recursively
};

var isMirror = function(tree1, tree2){ // helper function
    if (tree1 === null || tree2 === null) return tree1 === tree2;   // check if either tree is null
    if (tree1.val !== tree2.val) return false;                      // they are both not null check if they have the same value
    return isMirror(tree1.left, tree2.right) && isMirror(tree1.right, tree2.left)   // if they both do we can check their children recursively by passing the correspoing pairs
};


var isSymmetric = function(root) {
    if (root === null) return true; 
    
    return isMirror(root.left, root.right); 
};

var isMirror = function(tree1, tree2){ // helper function
    if (tree1 === null || tree2 === null) return tree1 === tree2;
    if (tree1.val !== tree2.val) return false;
    return isMirror(tree1.left, tree2.right) && isMirror(tree1.right, tree2.left)
};