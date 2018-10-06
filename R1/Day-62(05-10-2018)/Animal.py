#class Animal
class Animal:
    def __init__(self, name):
        self.name = name
        self._age = 22

    def get_age(self):
        return self._age
    
    def _privateMethod():
        print("PrivateMethod")
    
    @staticmethod
    def moo():
        print("Mooooo")
    
animal = Animal("Dog")
print(animal.get_age())
