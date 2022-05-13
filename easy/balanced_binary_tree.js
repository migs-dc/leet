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
var isBalanced = function(root) {
    if (root === null) return true; // just testing edge cases

    return getHeight(root) !== -1; // calls helper function that will check if any node is unbalanced
};

let getHeight = function(node) { // helper function that uses recursion to check trees
    if (node === null) return 0;  // checks if the node is null or basically not a child

    let left = getHeight(node.left);    // sends the left and right children recursively to check if they are unbalanced 
    let right = getHeight(node.right);  // or if their children are unbalanced and so on

    if (left === -1 || right === -1 || Math.abs(left - right) > 1) return -1; // if a unbalanced node is detected -1 is passed all throughout until the top so that the first call of getHeight(root) returns -1

    return Math.max(left, right) + 1; // if it gets to this point it means that it and it's children are not unbalanced. just add the height so far "Math.max(left, right)" so that it's parent can be checked
}

// time: O(n) - just iterating through all nodes once
// space: O(1) - just storing the heights of the left and right of the node and it's not stored of each node just left and right used by all children up to the parent

// WATCH VID AGAIN sometime

// no comments part

var isBalanced = function(root) {
    if (root === null) return true;

    return getHeight(root) !== -1;
};

let getHeight = function(node) {
    if (node === null) return 0;

    let left = getHeight(node.left);
    let right = getHeight(node.right);

    if (left === -1 || right === -1 || Math.abs(left - right) > 1) return -1;

    return Math.max(left, right) + 1;
}