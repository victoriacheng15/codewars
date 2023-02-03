def next_id(arr):
  used, num = set(arr), 0

  for id in used:
    if id == num: num += 1
    
  return num


print(next_id([0,1,2,3,5]))