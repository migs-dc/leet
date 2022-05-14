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
    if (root === null) return 0;    // edge case
    let queue = [];                 // initialize queue
    queue.push(root);               // add root in queue
    let depth = 0;                  // initialize variable for depth

    while (queue.length !== 0){     // outer loop, as long as there are still children added to the queue that needs to be checked
        let numberOfNodes = queue.length;   // make a variable for eh number of nodes in a level

        while (numberOfNodes > 0){ // inner loop, as long as the queue is still not empty
            let currentNode = queue.shift(); // top of the queue is removed and placed in currentNode
            
            if (currentNode.left === null && currentNode.right === null){ // if the currentNode has no children add to the depth count and simply return that because we found a leaf
                depth++;
                return depth;
            } 
            if (currentNode.left !== null) queue.push(currentNode.left);    // add children of the currentNode
            if (currentNode.right !== null) queue.push(currentNode.right);
            numberOfNodes--;    // after finishing checking that node and adding it's children decrement the numberOfNodes, which is a counter for how many nodes in that level
        }
        depth++;    // add one to depth after finishing a level (inner loop)
    }
};


//no comments
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