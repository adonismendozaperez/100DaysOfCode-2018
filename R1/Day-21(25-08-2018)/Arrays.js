let {log} = console;

function sumOfTen(arr) {
    arr.splice(1,2);
    return arr.reduce((a, b) => a + b);
}
 log(sumOfTen([2, 5, 1, 5, 2, 1])); //10
/*
    Copy Array Items Using slice()
*/
function forecast(arr) {
    let newArr = arr.slice(2,4);
    return newArr;
}
log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
/*
    Copy an Array with the Spread Operator
*/
function copyMachine(arr, num) {
    let newArr = [];
      while (num >= 1) {
        newArr = [[...arr], ...newArr];
        num--;
    }
    return newArr;
}    
log(copyMachine([true, false, true], 2));
/*
    Combine Arrays with the Spread Operator
*/
function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning', ...fragment, 'is', 'fun'];
    return sentence;
}
log(spreadOut());
/*
    Check For The Presence of an Element With indexOf()
*/
let  quickCheck =(arr, elem) => arr.indexOf(elem) === -1 ? false : true;
log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms')); //False
/*
    Create complex multi-dimensional arrays
*/
let myNestedArray = [
    ['unshift', false, 1, 2, 3, 'complex', 'nested'],
    ['loop', 'shift', 6, 7, 1000, 'method'],
    [
      ['deep'],
      [
        ['deeper'],
        [['deepest']]
      ]
    ]
  ];

/*
    Use the delete Keyword to Remove Object Properties
*/
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
delete(foods.oranges);
delete(foods.plums);
delete(foods.strawberries);
log(foods);
/*
  Check if an Object has a Property
*/
let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
function isEveryoneHere(obj) {
    let peoples = [ 'Alan', 'Jeff', 'Sarah',  'Ryan'];
    for (let members of peoples) {
        return obj.hasOwnProperty(members)
    }
}
log(isEveryoneHere(users));
