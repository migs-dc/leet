/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    let res  = new ListNode(); // initialize result list
    const head = res;          // a pointer our resulting list

    while(list1 && list2) {         // loop while both l1 and l2 are not null
        if(list1.val < list2.val){  // if l2.val is <=
            res.next = list1;       // add l1 to res
            list1 = list1.next;     // move l1 pointer
        } else {
            res.next = list2;       // else add l2 to res
            list2 = list2.next;     // move l2 pointer
        }
        res = res.next              // move res pointer otherwise it'll just overwrite the same node
    } 
    if (list1) res.next = list1;    // if l1 is not null simply add all remaining inside l1 to res
    if (list2) res.next = list2;    // if l2 is not null simply add all remaining inside l2 to res

    return head.next;               // return our pointer that points to the start of res
};