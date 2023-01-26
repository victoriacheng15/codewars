from typing import List, Union

# def is_vow(inp: list[int]) -> list[Union[int, str]]:
#   res=[]
#   vowels = ['a', 'e', 'i', 'o', 'u']
#   for num in inp:
#     res.append(chr(num)) if chr(num) in vowels else res.append(num)
#   return res

def is_vow(inp: list[int]) -> list[Union[int, str]]:
  return [chr(num) if chr(num) in 'aeiou' else num for num in inp]

# print(is_vow(117))
# print(is_vow([118,117,120]))
print(is_vow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]))
