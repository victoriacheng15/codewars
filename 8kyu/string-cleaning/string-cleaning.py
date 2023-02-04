import re

def string_clean(s):
  return re.sub("\d", "", s)


print(string_clean("123456789"))