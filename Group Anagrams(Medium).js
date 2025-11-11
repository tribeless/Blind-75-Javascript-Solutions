/**
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Explanation:

There is no string in strs that can be rearranged to form "bat".
The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
Example 2:

Input: strs = [""]

Output: [[""]]

Example 3:

Input: strs = ["a"]

Output: [["a"]]

 

Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.
 */
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// O(N*Klogk)
var groupAnagrams = function(strs) {
    if(!strs.length) return [[""]];
    if(strs.length === 1) return [strs];

    let strMap = {}
    let results = {}
    for(const val of strs){
        let sorted = val.split('').sort().join("")
        strMap[sorted] = (strMap[sorted] + 1) || 1
    }

    for(const val of strs){
        let sorted = val.split('').sort().join("")
        if(strMap[sorted]){
            if(results[sorted]){
                results[sorted] = [...results[sorted], val]
            }else{
                let temp = []
                temp.push(val)
                results[sorted] = temp
            }
        }
    }
    return Object.values(results)
};