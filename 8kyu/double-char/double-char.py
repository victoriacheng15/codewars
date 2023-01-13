# def double_char(s):
#   return "".join(list(map(lambda char: char * 2, s)))

def double_char(s: str) -> str:
  return "".join(char * 2 for char in s)

print(double_char("String"))