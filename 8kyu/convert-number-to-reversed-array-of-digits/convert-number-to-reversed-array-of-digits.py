# def digitize(n):
#   n, digits = str(n), []
#   for num in n:
#     digits.append(int(num))
#   return digits[::-1]
  
def digitize(n):
  return list(map(int, str(n)))[::-1]

print(digitize(35251))