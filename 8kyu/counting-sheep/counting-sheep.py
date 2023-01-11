# def count_sheeps(sheep):
#   return sum(filter(lambda x: x, sheep))

def count_sheeps(sheep):
  return sheep.count(True)



arr = [True,  True,  True,  False,
  True,  True,  True,  True ,
  True,  False, True,  False,
  True,  False, False, True ,
  True,  True,  True,  True ,
  False, False, True,  True]

print(count_sheeps(arr))

# print(True == 1)
# print(False == 0)