# def invert(lst):
#     return list(map(lambda num: num * -1, lst))

def invert(lst):
    return [-num for num in lst]

print(invert([1, 2, 3]))
print(invert([-1, -2, -3]))