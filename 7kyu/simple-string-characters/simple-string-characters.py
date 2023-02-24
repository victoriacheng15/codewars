# import re

# def solve(s):
#   def get_length(regex, string):
#     return len(re.findall(regex, string))
#   uppercase = r'[A-Z]'
#   lowercase = r'[a-z]'
#   digits = r'[0-9]'
#   special = r'\W'
#   return [get_length(uppercase, s), get_length(lowercase, s), get_length(digits, s), get_length(special, s)]

# without any imports
def solve(s):
    others = [
        sum(char.isupper() for char in s),
        sum(char.islower() for char in s),
        sum(char.isnumeric() for char in s), # or use isdigit()
    ]
    return others + [len(s) - sum(others)]

print(solve("Codewars@codewars123.com")) # [1,18,3,2]