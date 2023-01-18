def difference_in_ages(ages):
  youngest = min(ages)
  oldest = max(ages)
  return (youngest, oldest, oldest - youngest)

print(difference_in_ages([16, 22, 31, 44, 3, 38, 27, 41, 88]))
print(difference_in_ages([5, 8, 72, 98, 41, 16, 55]))
print(difference_in_ages([57, 99, 14, 32]))