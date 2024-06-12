## Type and Union 
```
 from typing import Type , Union
 ```

 ```python
 from typing import Type

class Animal:
    pass

class Dog(Animal):
    pass

def create_animal(cls: Type[Animal]) -> Animal:
    return cls()

my_dog = create_animal(Dog)
print(type(my_dog))  # <class '__main__.Dog'>

----------------------------------------------------
----------------------------------------------------
from typing import Union

def process(value: Union[int, str]) -> str:
    if isinstance(value, int):
        return f"Processing an integer: {value}"
    elif isinstance(value, str):
        return f"Processing a string: {value}"

print(process(42))          # Processing an integer: 42
print(process("hello"))     # Processing a string: hello


----------------------------------------------------
----------------------------------------------------


from typing import Type, Union

class Animal:
    def speak(self) -> str:
        return "Some generic animal sound"

class Dog(Animal):
    def speak(self) -> str:
        return "Woof!"

class Cat(Animal):
    def speak(self) -> str:
        return "Meow!"

def create_and_process(cls: Type[Animal], data: Union[int, str]) -> str:
    animal = cls()
    processed_data = f"{animal.speak()} - {data}"
    return processed_data

print(create_and_process(Dog, 123))        # Woof! - 123
print(create_and_process(Cat, "hello"))    # Meow! - hello


 ```

 ```
 In this example:

create_and_process takes a class (cls) that must be a subclass of Animal and a data argument that can be either int or str.
It creates an instance of the given class, gets the animal's sound using the speak method, and combines it with the data to produce a result.
```