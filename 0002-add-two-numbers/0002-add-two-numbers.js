/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let current_l1 = l1;
    let current_l2 = l2;

    let length_l1 = 0;
    let length_l2 = 0;

    let dummy = new ListNode(0);
    let tail = dummy;



    while (current_l1) {
        // console.log(current_l1.val);
        length_l1++;  
        current_l1 = current_l1.next;    
    }

    while (current_l2) {
        // console.log(current_l2.val);
        length_l2++;  
        current_l2 = current_l2.next;    
    }

    current_l1 = l1;
    current_l2 = l2;
    
    let bigger = length_l1;
    if (length_l2 > bigger) bigger = length_l2;

    
    let carry = 0;

    for (let i = 0; i < bigger; i++) {

        let val1 = current_l1 ? current_l1.val : 0;
        let val2 = current_l2 ? current_l2.val : 0;

        let sum = val1 + val2 + carry;

        carry = Math.floor(sum / 10);

        tail.next = new ListNode(sum % 10);
        tail = tail.next;

        if (current_l1) current_l1 = current_l1.next;
        if (current_l2) current_l2 = current_l2.next;

    }

    if (carry){
        tail.next = new ListNode(carry);
        
    } 

    let current = dummy.next;

        while (current !== null) {
        console.log(current.val);
        current = current.next;
    }

    return dummy.next;
    


};