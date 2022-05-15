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
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    let head = new TreeNode('dummy');   // initialize dummy head of new tree so that we can just return head.right later as our final result
    let cursor = head;                  // cursor denotes current node in the new tree

    inorder(root);                      // call helper function
    return head.right;                  // return all but the dummy node

    function inorder(node){             // helper function - where to recursion occurs
        if(node === null) return;       // just return if node is null

        inorder(node.left);             // first send the left of the node so that it's the first thing that gets added to the new tree

        cursor.right = new TreeNode(node.val);      // add node to the right of the new tree 
        cursor = cursor.right;                      // move cursor (pointer) to the newest node added

        inorder(node.right);            // check the right node next
    }
};