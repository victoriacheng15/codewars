# def bmi(weight, height):
#   bmi = round(weight / height ** 2, 1)
#   if bmi <= 18.5:
#     return "Underweight"
#   if bmi <= 25.0:
#     return "Normal"
#   if bmi <= 30.0:
#     return "Overweight"
#   if bmi > 30.0:
#     return "Obese"

def bmi(weight, height):
  bmi = round(weight / height ** 2, 1)
  result = ["Underweight", "Normal", "Overweight", "Obese"]
  return result[(bmi > 30) + (bmi > 25) + (bmi > 18.5)]


print(bmi(50, 1.80))
print(bmi(80, 1.80))
print(bmi(90, 1.80))