class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        l = 0
        r = len(matrix) - 1

        while l <= r:
            midRow = l + (r - l) // 2
            if target == matrix[midRow][0] or target == matrix[midRow][-1]:
                return True
            elif target < matrix[midRow][0]:
                r = midRow - 1
            elif target > matrix[midRow][-1]:
                l = midRow + 1
            else:
                nums = matrix[midRow]
                l2 = 1
                r2 = len(nums) - 2
                while (l2 <= r2):
                    mid = l2 + (r2 - l2) // 2
                    if target == nums[mid]:
                        return True
                    elif target < nums[mid]:
                        r2 = mid - 1
                    else:
                        l2 = mid + 1
                return False
        
        return False
        