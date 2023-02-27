import re
def solve(s):
    lower = re.compile(r'[a-z]')
    lower_count = len(re.findall(lower, s))
    upper_count = len(s) - lower_count
    return s.lower() if lower_count >= upper_count else s.upper()

# print(solve("code"))
print(solve("code") == "code")
print(solve("CODe") == "CODE")
print(solve("COde") == "code")
