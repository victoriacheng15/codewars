# def reverse_words(text):
#   wordArr = text.split()
#   res = ""
#   for word in wordArr:
#     res += word[::-1] + " "
  
#   return res

# def reverse_words(text):
#   wordArr = text.split()
#   res = [word[::-1] for word in wordArr]
  
#   return " ".join(res)

def reverse_words(text):
  return " ".join([word[::-1] for word in text.split(" ")])

print(reverse_words("The quick brown fox jumps over the lazy dog."))
print(reverse_words("double  spaced  words"))