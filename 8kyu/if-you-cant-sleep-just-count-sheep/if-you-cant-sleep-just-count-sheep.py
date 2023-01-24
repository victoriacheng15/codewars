# def count_sheep(n):
#   res = ""
#   for num in range(1, n + 1):
#     if num == 0:
#       return res
#     else:
#       res += "{} sheep...".format(num)
#   return res

def count_sheep(n):
  return "".join(f"{num} sheep..." for num in range(1, n + 1))


print("start")
print(count_sheep(0))
print(count_sheep(3))