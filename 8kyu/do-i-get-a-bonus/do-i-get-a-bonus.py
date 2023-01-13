# def bonus_time(salary: int, bonus: int) -> str:
#   total = salary * 10 if bonus else salary
#   return f"${total}"

def bonus_time(salary: int, bonus: int) -> str:
  return "${}".format(salary * (10 if bonus else 1))

print(bonus_time(2, True))
print(bonus_time(78, False))