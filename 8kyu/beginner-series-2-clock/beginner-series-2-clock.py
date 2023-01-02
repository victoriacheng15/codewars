from functools import reduce

def past(h, m, s):
  times = [h * 60 * 60, m * 60, s]
  return reduce(lambda x, y: x + y, times) * 1000



print(past(0, 1, 1))