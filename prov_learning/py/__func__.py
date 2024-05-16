#Setting attributes on __func__

class cls:
    def foo(self):
        # self.foo.x = 22 # it wont work.. 
        self.foo.__func__.x = 22 #setting attribute using __func__ 
        print(self.foo.x)
        

cls = cls()
cls.foo()
