import functools

def find_difference(a, b):
  def volume(arr):
    return functools.reduce(lambda total, num: total * num, arr)
  
  return abs(volume(a) - volume(b))

print(find_difference([2,2,3], [5,4,1]))