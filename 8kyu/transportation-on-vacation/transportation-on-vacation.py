def rental_car_cost(d):
  rate, total = d * 40, 0
  if d > 6:
    total = rate - 50
  elif d > 2:
    total = rate - 20
  elif d < 3:
    total = rate
  return total