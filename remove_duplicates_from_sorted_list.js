/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteDuplicates = function(head) {
    
    let currentNode = head; // getting the ref of the head of the LL from head and putting it on our currentNode
    
    while(currentNode && currentNode.next){             // loop keeps going until neither currentNode or it's next node are null
        if (currentNode.val == currentNode.next.val){   // if the val of the currentNode and the next one are the same
            currentNode.next = currentNode.next.next;   // we simply make our current node point to the node after the current node
        } else {                                        // we repeat this until our currentNode's val is no longer the same with the next node's val
            currentNode = currentNode.next;             // then we just change the reference of currentNode. it's a little bit like reccursion in way that we're reusing currentNode.
        }                                                           // * just had a little bit of trouble wrapping it around my head for a bit
    }
    
    return head;                                        // after that we simply return our head and all it's pointing too now
    
};