# def greet(name: str, owner: str) -> str:
#   return "Hello boss" if name == owner else "Hello guest"

def greet(name: str, owner: str) -> str:
    return "Hello {}".format("boss" if name == owner else "guest")