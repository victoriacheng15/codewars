def count_positives_sum_negatives(arr):
  if not arr:
    return []

  positive, negative = 0, 0
  for num in arr:
    if num > 0:
      positive+=1
    else:
      negative += num
  return [positive, negative]

print(count_positives_sum_negatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))
print(count_positives_sum_negatives([]))