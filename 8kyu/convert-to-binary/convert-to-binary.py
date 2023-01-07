# def to_binary(n):
#   return int(bin(n)[2:])

def to_binary(n):
  return int(f"{n:b}")

print(to_binary(5))