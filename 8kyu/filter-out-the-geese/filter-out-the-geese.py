from typing import List

geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
def goose_filter(birds: List[str]) -> List[str]:
  return list(filter(lambda bird: bird not in geese, birds))

# def goose_filter(birds: List[str]) -> List[str]:
#   return [bird for bird in birds if bird not in geese]


print(goose_filter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]))
print(goose_filter(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]))