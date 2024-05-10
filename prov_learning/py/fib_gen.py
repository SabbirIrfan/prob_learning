
def fib():
    first = 0
    second = 1
    
    while 1:
        yield first 
        first,second =second, first+second
        

g = fib()

for i in range(24):
    print(next(g))

list(g) 
# BGm14ooZkVPZKTHPOHA7E  aeid: BELTxV_IgTz28_6LkVkgHy0M9LpekqTRb0fn8BEvdQec



cesr::
efficient!!
asyncio < trio < crio 

flow based programmingg::


flow based programming!!