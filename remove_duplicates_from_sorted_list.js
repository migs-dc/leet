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
    
    //     let currentNode = new ListNode(-1);
    //     currentNode.next = head;
    //     head = currentNode;
        
    //     let resNode = new ListNode(-1);
    //     resNode.next = head.next;
        
    //     while(currentNode.next !== null){
    //         if (currentNode !== currentNode.next) {
    //             resNode.next = c
    //         }
    //     }
        
        let currentNode = head;
        
        while(currentNode && currentNode.next){
            if (currentNode.val == currentNode.next.val){
                currentNode.next = currentNode.next.next;
            } else {
                currentNode = currentNode.next;
            }
        }
        
        return head;
        
    };