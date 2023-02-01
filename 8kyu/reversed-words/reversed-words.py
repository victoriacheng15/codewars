def reverse_words(s):
    arr = s.split()
    arr.reverse()
    return " ".join(arr)


print(reverse_words("hello world!"))