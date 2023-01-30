# def print_array(arr):
#   res = []
#   for x in arr:
#     res.append(str(x))
#   return ",".join(res)

def print_array(arr):
  return ".".join(map(str, arr))



print(print_array([1,2,3,4,5,6,7,8,9]))
print(print_array([True, False, True]))