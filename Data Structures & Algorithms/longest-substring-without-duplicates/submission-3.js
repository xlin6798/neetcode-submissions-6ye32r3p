class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let freq = new Map();
        let l = 0;
        let maxLen = 0;
        for (let r = 0; r < s.length; r++) {
            let c = s[r];
            if (freq.has(c) && freq.get(c) >= l) {
                l = freq.get(c) + 1;
            }
            freq.set(c, r);
            maxLen = Math.max(maxLen, r - l + 1);
        }
        return maxLen;
    }
}
