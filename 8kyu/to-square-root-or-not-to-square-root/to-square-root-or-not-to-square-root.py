import math

def square_or_square_root(arr):
  def sq_rt(x):
    return math.sqrt(x)
  op = lambda num: sq_rt(num) if sq_rt(num).is_integer() else num**2
  return list(map(op, arr))

print(square_or_square_root([4, 3, 9, 7, 2, 1 ])) 
# [2, 9, 3, 49, 4, 1]