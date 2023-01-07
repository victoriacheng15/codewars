def count_by(x, n):
  """
  Return a sequence of numbers counting by `x` `n` times.
  """
  res = []
  for num in range(1, n + 1):
    res.append(num * x)
  return res


print(count_by(1, 5))
print(count_by(2, 5))