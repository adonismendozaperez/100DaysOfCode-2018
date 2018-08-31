//Avoid Mutations and Side Effects Using Functional Programming
let fixedValue = 4;
let incrementer = ()=> fixedValue + 1;
let newValue = incrementer(); // Should equal 5
console.log(fixedValue); // Should print 4

/**
 *  Refactor Global Variables Out of Functions
    So far, we have seen two distinct principles for
    functional programming:

1) Don't alter a variable or object - create new variables 
    and objects and return them if need be from a function.

2) Declare function arguments - any computation inside a function
     depends only on the arguments, and not on any global object or variable.

    Adding one to a number is not very exciting, but we can apply these 
    principles when working with arrays or more complex objects.
 */

 //Refactor Global Variables Out of Functions
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add(bookList, bookName) {
  return bookList.concat(bookName);
}

function remove (arr, bookName) {

  let copyBookList = [...arr];

  if (copyBookList.indexOf(bookName) >= 0) {
    copyBookList.splice(copyBookList.indexOf(bookName), 1);
    
    return copyBookList;
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');
console.log(bookList);