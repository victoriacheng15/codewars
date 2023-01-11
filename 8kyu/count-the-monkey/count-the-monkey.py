# def monkey_count(n):
#   res, count = [], 1
#   while count <= n:
#     res.append(count)
#     count += 1
#   return res

def monkey_count(n):
  return list(range(1, n + 1))


print(monkey_count(5))