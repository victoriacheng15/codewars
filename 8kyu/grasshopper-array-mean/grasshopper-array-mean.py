# use reduce method to find the average and then divide by the nums length
def find_average(nums):
  if len(nums) == 0:
    return 0
  return sum(nums) / len(nums)


print(find_average([1, 3, 5, 7]))
print(find_average([5, 7, 3, 7]))