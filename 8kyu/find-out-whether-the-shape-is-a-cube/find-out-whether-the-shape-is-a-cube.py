# def cube_checker(volume, side):
#   if side <= 0:
#     return False
#   return volume == side ** 3

def cube_checker(volume: int, side: int) -> bool:
  return False if side <= 0 else volume == side ** 3

print(cube_checker(1,1))
print(cube_checker(8,2))
print(cube_checker(0,12))
print(cube_checker(0,0))