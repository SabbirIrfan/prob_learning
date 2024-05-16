sq = [x**2 for x in range(4) if x>=2] # expression for item in iterable

sq_dict = {x: x**2 for x in range(5)}

sq_set = {x**2 for x in range(4)}

squares_generator = (x**2 for x in range(5))


print(sq, sq_dict, sq_set)



