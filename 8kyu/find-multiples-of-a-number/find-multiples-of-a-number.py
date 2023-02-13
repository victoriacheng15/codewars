# def find_multiples(integer, limit):
#     result = []
#     for i in range(1, limit + 1):
#       if i % integer == 0:
#         result.append(i)
#     return result


def find_multiples(integer, limit):
  return [i for i in range(1, limit + 1) if i % integer == 0]


print(find_multiples(5, 25))