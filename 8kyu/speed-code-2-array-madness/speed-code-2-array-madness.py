# def array_madness(a,b):
#   def square(arr, pow):
#     return [num ** pow for num in arr]
  
#   return sum(square(a, 2)) > sum(square(b, 3))

def array_madness(a,b):
  return sum(num ** 2 for num in a) > sum(num ** 3 for num in b)


print(array_madness([4, 5, 6], [1, 2, 3]))