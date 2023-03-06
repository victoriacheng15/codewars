# def nb_dig(n, d):
#   count = ""
#   for digit in range(n + 1):
#     count += str(digit ** 2)
#   return len(list(filter(lambda digit: digit == str(d), count)))

# def nb_dig(n, d):
#   count = ""
#   for digit in range(n + 1):
#     count += str(digit ** 2)
#   return len([digit for digit in count if digit == str(d)])

def nb_dig(n, d):
  return str([digit ** 2 for digit in range(n + 1)]).count(str(d))

print(nb_dig(5750, 0)) #4700