# def paperwork(n, m):
#   if n < 0 or m < 0: 
#     return 0
#   return n * m

def paperwork(n, m):
  return n * m if n > 0 and m > 0 else 0


print(paperwork(5,5))
print(paperwork(-5,5))