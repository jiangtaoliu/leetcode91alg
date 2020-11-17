/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) return 0;
    let maxDepth = 0;
    let queue = [{node: root, level:1}];
    while(queue.length) {
        let {node, level} = queue.shift();
        maxDepth = Math.max(maxDepth, level);
        if (node.left) queue.push({node: node.left, level: level+1});
        if (node.right) queue.push({node: node.right, level: level+1});
    }
    return maxDepth;
};
// @lc code=end

