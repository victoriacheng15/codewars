def mygcd(x, y):
    return x if y == 0 else mygcd(y, x % y)


# def mygcd(x,y):
#     #GOOD LUCK
#     while y:
#         x,y=y,x%y
#     return x