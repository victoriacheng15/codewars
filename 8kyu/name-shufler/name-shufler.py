def name_shuffler(str_: str) -> str:
    return " ".join(str_.split()[::-1])


print(name_shuffler("Bob Dylan"))