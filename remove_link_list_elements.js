/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var removeElements = function(head, val) { 
    if (head === null) return null; // simply return null if LL is empty
    
    let currentNode = new ListNode(-1); // dummy node
    currentNode.next = head;            // add LL to dummy node
    head = currentNode;                 // make dummy node head
    
    while (currentNode.next !== null) {                 // iterate through LL until the end is found
        if (currentNode.next.val === val) {             // if the next node's value = val
            currentNode.next = currentNode.next.next;   // skip over it by assigning the current nodes next to the one                                                              after it hence the .next.next
        } else {
             currentNode = currentNode.next;            // otherwise just move on
        }
    }
    
    return head.next;   // return head without the dummy node at the front
    
};