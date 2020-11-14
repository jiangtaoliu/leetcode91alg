/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 */

// @lc code=start
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
var swapPairs = function(head) {
    if (!head || !head.next) return head;
    let cur = head;
    head = cur.next;
    while (cur && cur.next) {
        let after = cur.next.next;
        cur.next.next = cur;
        cur.next = after && after.next ? after.next : after;
        cur = after;
    }
    return head;
};
// @lc code=end

