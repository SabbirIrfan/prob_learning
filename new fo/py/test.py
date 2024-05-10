def x(y):
    y = y + 1
    yield y
    yield y-1


g = x(1)
# for i in g:
#     print(i)
print(g.send(None))
print(g.send("hello"))

# print(next(g))


