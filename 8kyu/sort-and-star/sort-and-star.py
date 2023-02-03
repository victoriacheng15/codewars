def two_sort(array):
  array.sort()
  return "***".join(array[0])


print(two_sort(["i", "want", "to", "travel", "the", "world", "writing", "code", "one", "day"]))