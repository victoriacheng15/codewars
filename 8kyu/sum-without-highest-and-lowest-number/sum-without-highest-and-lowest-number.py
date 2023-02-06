def sum_array(arr):
  if arr == None or len(arr) < 2: return 0
  min_num, max_num = min(arr), max(arr)
  return sum(arr) - min_num - max_num

print(sum_array([]))
print(sum_array([6, 2, 1, 8, 10]))
print(sum_array([-6, -20, -1, -10, -12]))