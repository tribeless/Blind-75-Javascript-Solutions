/*** Given a string s, return the number of palindromic substrings in it.

A string is a palindrome when it reads the same backward as forward.

A substring is a contiguous sequence of characters within the string.

 

Example 1:

Input: s = "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".
Example 2:

Input: s = "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
 

Constraints:

1 <= s.length <= 1000
s consists of lowercase English letters.
 */

// O(N^3)
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let count = s.length
    function check(l, r){
        while(l < r){
            if(s[l] !== s[r]){
                return false
            }
            l++
            r--
        }
        return true
    }
    for(let right = s.length;right > 0;right--){
        for(let start = 0;start < s.length - right;start++){
            if(check(start, start + right)){
                count++
            }
        }
    }
    return count
};