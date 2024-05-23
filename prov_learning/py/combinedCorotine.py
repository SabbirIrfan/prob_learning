import requests
import hashlib


class DiffCityException(Exception):
    pass

def combined_generator():
    while s:= ( yield 'send 1 for weather, 2 for MD5, or None for exit'):

        if s ==1:
            while city := (yield 'send a city id or None'):
                weather = requests.get(
                    f'https://worldweather.wmo.int/en/json/{city}_en.json').json()
                try:
                    for one_forecast in weather['city']['forecast']['forecastDay']:
                        yield one_forecast
                except DiffCityException:
                    break
        elif s==2:
            output = 'Enter text to hash or None'
            while s:= ( yield output ):
                m = hashlib.md5()
                m.update(s.encode())
                output = m.hexdigest()
        else:
            output = 'Unknown choice; try again'


g = combined_generator()
next(g)
print(g.send(1))
print(g.send(2)) 
print(g.throw(DiffCityException))
print(g.send(2))
print(g.send("hello"))
print(g.send("hell1"))