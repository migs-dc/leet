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
    let result = new TreeNode(0);
    let temp = result;
  
    function rec(node) {
      if (node === null) return;
      rec(node.left);
      temp.right = new TreeNode(node.val);
      temp = temp.right;
      rec(node.right);
    }
  
    rec(root);
    return result.right
  };