# if b is greater than a, swap a and b value
def remainder(a,b):
  if b > a:
    a, b = b, a
  return None if b == 0 else a % b


print(remainder(10,5))
print(remainder(1,0))
print(remainder(0,1))
