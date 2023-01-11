def descending_order(num):
  sortedArr = sorted(str(num), reverse=True)
  return int("".join(sortedArr))


print(descending_order(12345))