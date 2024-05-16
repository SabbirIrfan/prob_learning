from __future__ import generators
import hashlib
import requests
import sys

def md5_gen():
    output = None

    while s:= (yield output):
        m = hashlib.md5()
        print(s.encode())
        m.update(s.encode()) #converting to byte string
        
        output = m.hexdigest()
        print(output)




# g = md5_gen()
# g.send(None)
# p = g.send('hello')

def gen_forecast(city):
    weather = requests.get(
        f'https://worldweather.wmo.int/en/json/{city}_en.json').json()
    for one_forecast in weather['city']['forecast']['forecastDay']:
        yield one_forecast

g = gen_forecast(44)

print(next(g))
