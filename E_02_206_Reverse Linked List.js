/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

/*Solution 1: Recursion*/
var reverseList = function(head) {
    if(head === null || head.next === null) return head;
    var newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
};

/*Solution 2: Iteration*/
var reverseList = function(head) {
    if(head === null || head.next === null) return head;
    var prev = null;
    var curr = head;
    var next = null;
    while(curr !== null) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};
