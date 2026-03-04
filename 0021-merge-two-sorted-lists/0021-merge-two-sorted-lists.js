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
    
    current_l1=list1;
    current_l2=list2;

    let sortedList = new ListNode(0);
    let tail = sortedList;

    while(current_l1 || current_l2){
        let val1 = current_l1 ? current_l1.val : current_l2.val+1;
        let val2 = current_l2 ? current_l2.val : current_l1.val+1;

        if(val1<val2){
            tail.next = new ListNode(val1);
            tail= tail.next;
            if (current_l1) current_l1 = current_l1.next;
        }
        else{
            tail.next = new ListNode(val2);
            tail = tail.next
            if (current_l2) current_l2 = current_l2.next;
        }
    }

    return sortedList.next;    
};