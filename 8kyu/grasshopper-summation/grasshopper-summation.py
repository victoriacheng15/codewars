def summation(num):
  return num and summation(num - 1) + num
    

print(summation(8))