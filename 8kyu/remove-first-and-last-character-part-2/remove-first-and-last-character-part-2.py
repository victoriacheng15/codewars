def array(string):
    return " ".join(string.replace(",", " ").split()[1:-1]) or None

print(array('1,2,3'))
print(array('1,2'))
print(array('c4 0b 5')) # 0b