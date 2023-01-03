from functools import reduce

def find_average(numbers):
  sum = reduce(lambda a, b: a + b, numbers)
  return sum / len(numbers) or 0


print(find_average([1, 1, 1]))