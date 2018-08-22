//Regular expressions

/*
    The .test() method takes the regex,
    applies it to a string (which is placed
    inside the parentheses), and returns true
     or false if your pattern finds something or not.
*/
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);

/*
    There are other flags but here 
    you'll focus on the flag that ignores
    case - the i flag. You can use it by appending it to the regex. 
*/
let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i;
let result = fccRegex.test(myString);

/*
    You can also extract the actual
    matches you found with the .match() method.
*/
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex);
