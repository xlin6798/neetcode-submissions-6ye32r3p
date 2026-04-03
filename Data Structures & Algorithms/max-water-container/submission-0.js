class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0;
        let r = heights.length - 1;
        let maxWater = 0;
        while (l < r) {
            const area = Math.min(heights[l], heights[r]) * (r - l);
            maxWater = Math.max(area, maxWater);
            if (heights[l] < heights[r]) {
                l++;
            } else {
                r--;
            }
        }
        return maxWater;
    }
}
