def sum_cubes(n):
  return sum(i*i*i for i in range(1, n+1))

# def sum_cubes(n):
#   n = n * (n + 1)
#   return int(n * n / 4)


print(sum_cubes(2))