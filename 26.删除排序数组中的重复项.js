/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 1;
    let j = 0; 
    while (i < nums.length) {
      let num = nums[i];
      if (nums[j] !== num){
        nums[++j] = num;
      } else {
        i++;
      }
    }
    return j + 1;
};
// @lc code=end

