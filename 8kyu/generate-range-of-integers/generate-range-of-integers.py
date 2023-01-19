# generate a range of number start with min to max with step  and conver to array
# def generate_range(min, max, step):
#   if min > max:
#     raise ValueError('min must be less than max')
#   if step <= 0:
#     raise ValueError('step must be greater than 0')
#   return list(range(min, max + 1, step))

def generate_range(min, max, step):
  return [i for i in range(min, max + 1, step)]


print(generate_range(15, 10, 1))
print(generate_range(-10, 1, 1))
print(generate_range(1, 7, 2))