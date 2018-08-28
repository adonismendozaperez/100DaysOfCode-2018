//Define a Constructor Function
function Dog(){
    this.name = "Hunter";
    this.color = "Brown";
    this.numLegs = 3;
}
//Verify an Object's Constructor with instanceof
function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }

let myHouse = new House(3);
myHouse instanceof House;

//Understand Own Properties
function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }

  let canary = new Bird("Tweety");
  let ownProps = [];

  for (let prop in canary){
    if(canary.hasOwnProperty(prop)){
      ownProps.push(prop);
    }
  }

//Use Prototype Properties to Reduce Duplicate Code
function Dog(name) {
    this.name = name;
  }

Dog.prototype.numLegs = 3;

let beagle = new Dog("Snoopy");

//Iterate Over All Properties
function Dog(name) {
    this.name = name;
  }
  Dog.prototype.numLegs = 4;

  let beagle = new Dog("Snoopy");
  let ownProps = [];
  let prototypeProps = [];
  
  for (let property in beagle) {
    if(beagle.hasOwnProperty(property)) {
      ownProps.push(property);
    } else {
      prototypeProps.push(property);
    }
  } 

//Understand the Constructor Property
function Dog(name) {
    this.name = name;
}
function joinDogFraternity(candidate) {
    return (candidate.constructor === Dog) ? true : false;
}
  
//Change the Prototype to a New Object
function Dog(name) {
    this.name = name; 
  }

  Dog.prototype = {
    numLegs: 3,
    eat(){
      console.log("nom nom nom");
    },
    describe(){
      console.log(`My name is ${this.name}`);
    }
  };

//Remember to Set the Constructor Property when Changing the Prototype
function Dog(name) {
    this.name = name; 
  }
  
Dog.prototype = {
    constructor: Dog,
    numLegs: 2, 
    eat() {
        console.log("nom nom nom"); 
    }, 
    describe() {
        console.log("My name is " + this.name); 
    }
};

//Understand Where an Object’s Prototype Comes From
function Dog(name) {
    this.name = name;
  }
  
let beagle = new Dog("Snoopy");  
Dog.prototype.isPrototypeOf(beagle);

// Understand the Prototype Chain
function Dog(name) {
    this.name = name;
  }

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // => true
Object.prototype.isPrototypeOf(Dog.prototype);

// Use Inheritance So You Don't Repeat Yourself
function Cat(name) {
    this.name = name; 
  }
  
  Cat.prototype = {
    constructor: Cat
  };
  
  function Bear(name) {
    this.name = name; 
  }
  
  Bear.prototype = {
    constructor: Bear
  };
  
  function Animal() { }
  
  Animal.prototype = {
    constructor: Animal,
    eat() {
      console.log("nom nom nom");
    }
  };