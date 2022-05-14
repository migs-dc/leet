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
 * @return {number}
 */
var minDepth = function(root) {
    if (root === null) return 0;

    let queue = [];
    queue.push(root);
    let depth = 0;

    while (queue.length !== 0){
        let numberOfNodes = queue.length;

        while (numberOfNodes > 0){
            let currentNode = queue.shift();
            
            if (currentNode.left === null && currentNode.right === null){
                depth++;
                return depth;
            } 
            if (currentNode.left !== null) queue.push(currentNode.left);
            if (currentNode.right !== null) queue.push(currentNode.right);

            numberOfNodes--;
        }
        depth++;
    }
};