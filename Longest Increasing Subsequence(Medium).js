/**
 * Given an integer array nums, return the length of the longest strictly increasing subsequence.

 

Example 1:

Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
Example 2:

Input: nums = [0,1,0,3,2,3]
Output: 4
Example 3:

Input: nums = [7,7,7,7,7,7,7]
Output: 1
 

Constraints:

1 <= nums.length <= 2500
-104 <= nums[i] <= 104
 

Follow up: Can you come up with an algorithm that runs in O(n log(n)) time complexity?

 */

// O(n log(n))

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let res = []
    function binarySearch(arr, target){
        let left = 0;
        let right = arr.length - 1
        while(left <= right){
            const mid = (left+right) >> 1
            if(target === arr[mid]){
                return mid
            }else if(target < arr[mid]){
                right = mid -1
            }else{
                left = mid +1
            }
        }
        return left
    }

    for(const n of nums){
        if(!res.length || res[res.length-1] < n){
            res.push(n)
        }else{
            const index = binarySearch(res, n)
            res[index] = n
        }
    }
    return res.length
};