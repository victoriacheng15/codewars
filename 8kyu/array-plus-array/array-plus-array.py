import itertools

# def array_plus_array(arr1,arr2):
#   arr = arr1 + arr2
#   res = 0
#   for val in arr:
#     res += val
#   return res

# def array_plus_array(arr1,arr2):
#   return sum(arr1 + arr2)

def array_plus_array(arr1,arr2):
  return sum(itertools.chain(arr1, arr2))

print(array_plus_array([1, 2, 3], [4, 5, 6]))
print(array_plus_array([100, 200, 300], [400, 500, 600]))