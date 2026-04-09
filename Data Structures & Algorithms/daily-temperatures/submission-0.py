class Solution:
    def dailyTemperatures(self, temps: List[int]) -> List[int]:
        result = [0] * len(temps)
        stack = []

        for i, temp in enumerate(temps):
            while stack and temp > temps[stack[-1]]:
                indx = stack.pop()
                result[indx] = i - indx

            stack.append(i)
        
        return result
            
        