class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const count1 = new Map();
        const count2 = new Map();
        let minLen = Infinity;
        let start = 0;
        for (const c of t) {
            count1.set(c, (count1.get(c) || 0) + 1);
        }
        const match1 = count1.size;
        let match2 = 0;

        let l = 0;
        for (let r = 0; r < s.length; r++) {
            const c = s[r];
            count2.set(c, (count2.get(c) || 0) + 1);
            if (count1.has(c) && count2.get(c) === count1.get(c)) {
                match2 += 1;
            }
            while (match1 === match2) {
                if (r - l + 1 < minLen) {
                    start = l;
                    minLen = r - l + 1;
                }

                if (count1.has(s[l])) {
                    count2.set(s[l], count2.get(s[l]) - 1);
                    if (count2.get(s[l]) === count1.get(s[l]) - 1) {
                        match2 -= 1;
                    }
                }
                l += 1;
            }
        }
        return minLen === Infinity ? "" : s.slice(start, start + minLen);    }
}
