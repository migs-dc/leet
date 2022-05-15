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
const increaseBST = (root) => {
    let head = new TreeNode('dummy');
    let cursor = head;

    inoder(root);

    return head.right;

    function inoder(node){
        if(node === null) return;

        inorder(node.left);

        cursor.right = new TreeNode(node.val);
        cursor = cursor.right;

        inorder(node.right);
    }
};