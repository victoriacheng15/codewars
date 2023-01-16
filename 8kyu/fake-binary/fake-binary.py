# def fake_bin(x: str) -> str:
#   return "".join(map(lambda num: "0" if int(num) < 5 else "1", list(x)))

def fake_bin(x: str) -> str:
  return "".join("0" if int(num) < 5 else "1" for num in x)


print(fake_bin("45385593107843568")) # 01011110001100111