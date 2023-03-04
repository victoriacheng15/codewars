import re

def disemvowel(string_):
    return re.sub('[aeiouAEIOU]', '', string_) 

print(disemvowel("This website is for losers LOL!"))