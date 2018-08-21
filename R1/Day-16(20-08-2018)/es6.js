//Destructuring Assignment to Pass an Object as a Function's Parameters
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };

  const half = (function() {
    "use strict"; 
    return function half({max , min}) {
      return (max + min) / 2.0;
    };
  })();

  console.log(stats); // should be object
  console.log(half(stats)); // should be 28.015

/************************************************** */

  const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
  };
  function makeList(arr) {
    "use strict";
    const resultDisplayArray = [];
    for (let i=0; i< arr.length; i++){
      resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`);
    }
    return resultDisplayArray;
  }
  const resultDisplayArray = makeList(result.failure);

//-----------------------------------------------

  const createPerson = (name, age, gender) => {
    return { name, age, gender};
  };
  console.log(createPerson("Zodiac Hasbro", 56, "male"));

  //-----------------------------------------------v

  const bicycle = {
    gear: 2,
    setGear(newGear) {
      "use strict";
      this.gear = newGear;
    }
  };

  bicycle.setGear(3);
  console.log(bicycle.gear);

  //*********************************************************** */
  function makeClass() {
  class Vegetable{
    constructor(name){
      this.name = name;
    }
  }
    return Vegetable;
  }
  const Vegetable = makeClass();
  const carrot = new Vegetable('carrot');
  console.log(carrot.name); // => should be 'carrot'