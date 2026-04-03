class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let l = 0;
        let r = height.length - 1;
        let leftMax = 0;
        let rightMax = 0;
        let water = 0;

        while (l < r) {
            if (height[l] < height[r]) {
                if (height[l] > leftMax) {
                    leftMax = height[l];
                } else {
                    water += leftMax - height[l]; // if left height < right height, it will be bounded, so it is safe to add the area
                }
                l++;
            } else {
                if (height[r] >=rightMax) {
                    rightMax = height[r];
                } else {
                    water += rightMax - height[r];
                }
                r--;
            }
        }

        return water;
    }
}
