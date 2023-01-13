# def format_money(amount: int) -> str:
#   return "${:.2f}".format(amount)

def format_money(amount: float) -> str:
  return f"${amount:.2f}"



print(format_money(39.99))
print(format_money(3))
print(format_money(1082))