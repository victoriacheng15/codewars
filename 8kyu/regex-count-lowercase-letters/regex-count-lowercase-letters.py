import re

# def lowercase_count(string):
#     return sum(1 for c in string if c.islower())

def lowercase_count(string):
    return len(re.findall("[a-z]", string))

print(lowercase_count("abc"))