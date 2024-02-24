// question 1 . Two sum

// my code 
// function twoSum(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) return [i, j]
//         }
//     }
// }
// let nums = [3,2,4]
// let target = 6

// console.log(twoSum(nums, target))

// optimized code 

// function twoSum(nums, target) {
//     const bucket = new Map()
//     for (let i = 0; i < nums.length; i++) {
//         let value = target - nums[i]
//         if (bucket.has(value)) return [bucket.get(value), i]
//         bucket.set(nums[i], i)
//     }
// }
// let nums = [3, 2, 4]
// let target = 6

// console.log(twoSum(nums, target))

// // question 3 longest substring without repeating characters 

// function lengthOfLongestSubstring(s) {
//     let maxLength = 0;  // Variable to store the maximum length of the substring
//     let start = 0;      // Start index of the current substring
//     const charIndexMap = {};  // Map to store the last index of each character in the substring

//     for (let end = 0; end < s.length; end++) {
//         const currentChar = s[end];  // Current character at the end index

//         // If the current character already exists in the substring and its index is greater than or equal to the start index
//         if (charIndexMap[currentChar] !== undefined && charIndexMap[currentChar] >= start) {
//             start = charIndexMap[currentChar] + 1;  // Update the start index to the next index after the repeated character
//         }

//         charIndexMap[currentChar] = end;  // Update the last index of the current character in the map

//         // Update the maximum length considering the current substring
//         maxLength = Math.max(maxLength, end - start + 1);
//     }

//     return maxLength;  // Return the maximum length of the substring without repeating characters
// }




function characterReplacement(s, k) {
    let maxLength = 0;
    let maxCount = 0;
    let start = 0;
    const charCount = new Array(26).fill(0);

    for (let end = 0; end < s.length; end++) {
        const currentChar = s[end].charCodeAt(0) - 'A'.charCodeAt(0);
        charCount[currentChar]++;

        // Update the maximum count of any character in the current window
        maxCount = Math.max(maxCount, charCount[currentChar]);

        // If the size of the window minus the maximum count exceeds k,
        // shrink the window by moving the start pointer
        if (end - start + 1 - maxCount > k) {
            charCount[s[start].charCodeAt(0) - 'A'.charCodeAt(0)]--;
            start++;
        }

        // Update the maximum length of the substring
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

// Example usage:
let s = "ABAB";
let k = 2;
console.log(characterReplacement(s, k)); // Output: 4 (Replace two 'A's with 'B's to get "BBBB")

s = "AABABBA";
k = 1;
console.log(characterReplacement(s, k)); // Output: 4 (Replace 'B' with 'A' to get "AAAABBA")

