
  //Inherit Behaviors from a Supertype
  function Animal() { }

    Animal.prototype = {
        constructor: Animal, 
        eat: function() {
            console.log("nom nom nom");
        }
    };

let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype);

duck.eat(); 
beagle.eat(); 

//Set the Child's Prototype to an Instance of the Parent
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();
beagle.eat(); 

//Reset an Inherited Constructor Property
function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

let duck = new Bird();
let beagle = new Dog();

duck.constructor;
beagle.constructor

//Add Methods After Inheritance
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() {
  console.log("Woof!");
};

let beagle = new Dog();
beagle.eat(); 
beagle.bark();

//Override Inherited Methods
function Bird() { }
Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

Penguin.prototype.fly = function() {
  return "Alas, this is a flightless bird.";
};

let penguin = new Penguin();
console.log(penguin.fly());

//Use a Mixin to Add Common Behavior Between Unrelated Objects
let bird = {
    name: "Donald",
    numLegs: 2
  };
  
  let boat = {
    name: "Warrior",
    type: "race-boat"
  };
  
  function glideMixin(obj){
      obj.glide = function(){
          console.log("hii");
      }
  }
  
  glideMixin(bird);
  glideMixin(boat);
  
  bird.glide(); 
  boat.glide();

  /*
  Use Closure to Protect Properties
  Within an Object from Being
  Modified Externally
  */ 
  function Bird() {
    var weight = 15; 
    function handleWeight() {
      return weight; 
    }
    this.getWeight = function() {
      return handleWeight();  
    }
  }
  
  let ducky  = new Bird();
  ducky.getWeight();

  //Use an IIFE to Create a Module
  let funModule = ( function(){
    return {
       isCuteMixin: function(obj) {
          obj.isCute = function() {
          return true;
        };
      },
       singMixin: function(obj) {
        obj.sing = function() {
          console.log("Singing to an awesome tune");
        };
      }
  
    }
  })();