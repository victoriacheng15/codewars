# def stringy(size: int) -> str:
#   res = ""
#   for i in range(size):
#     res += "1" if i % 2 == 0 else "0"
#   return res

def stringy(size: int) -> str:
  return "".join([str(i % 2) for i in range(1, size + 1)])



print(stringy(3)) #101
print(stringy(5)) #10101