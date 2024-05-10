#mutable data type sould not be passed as default datatype 


class A(object):
    def __init__(self, something):
        self.something = something
        print("A init called" + something)
        
        
 
 #notice that the A class is not necessarily called first
class B(A):
    pass
    def __init__(self, something):
        A.__init__(self, something)
        self.something = something
        print("B init called "+ something)
        something+=" changed"
        # Calling init of parent class
        A.__init__(self, something)
    def understandSelf():
        #no self provided
        print("no self provided")

    def understandSelfWithSelf(self):
        print("self is provided")
        


#instance(self) vs class(className) variable
 
class C():
    num = 0
    def __init__(self):
        self.num += 1

# print(C.num)
# c1 = C()
# c2 = C()


# print(C.num)

# print(c1.num)

# print(c2.num)

#Classmethod (@classmethod) vs instance mehtod
#classmethod also called the alternative constructor

class method():

    def __init__(self, first = "", last = ""):
        self.first = first
        self.last = last
        
    @classmethod 
    def classMethod(cls, parse_str):
        first , last = parse_str.split('-')
        return method(first,last)


    def instanceMethod(self):
        print("this is a instance methid")

m  = method()
# m.classMethod()
# m.instanceMethod()
# method.classMethod()
# method.classMethod()
    
stream = "john-doe"
new_methodClass = m.classMethod(stream)
print(new_methodClass.__dict__)


# static method

#hint on  which should be the static method 
# if in the method we dont use cls or self anywhere then i might be best to declare staticmethod
