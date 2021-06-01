/**
 * 给你一个字符串 s，找到 s 中最长的回文子串。

示例 1：
输入：s = "babad"
输出："bab"
解释："aba" 同样是符合题意的答案。

示例 2：
输入：s = "cbbd"
输出："bb"

示例 3：
输入：s = "a"
输出："a"

示例 4：
输入：s = "ac"
输出："a"
 

提示：
1 <= s.length <= 1000
s 仅由数字和英文字母（大写和/或小写）组成
*/

// 暴力解法，列举所有的子串，判断是否为回文串，保存最长的回文串
const isPalindrome = (str) => {
  const length = str.length;
  if (length === 1) return true;
  let bool = true
  for (let i = 0; i < (length / 2); i++) {
    if (str[i] !== str[length - i - 1]) {
      bool = false
      break
    }
  }
  return bool;
}

const longestPalindrome = (s) => {
  let max = 0;
  let result = '';
  const length = s.length;
  for (let i = 0; i < length; i++) {
    for (let j = 1; j <= length - i; j++) {
      const str = s.substr(i, j);
      console.log('str:', str, str.length, max, isPalindrome(str))
      if (isPalindrome(str) && str.length > max) {
        max = str.length;
        result = str;
      }
    }
  }
  return result;
};
