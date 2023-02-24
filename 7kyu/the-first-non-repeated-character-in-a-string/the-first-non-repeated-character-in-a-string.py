def first_non_repeated(s):
    for char in s:
        if s.find(char) == s.rfind(char):
            return char
    return None

print(first_non_repeated('1122321235121222'))