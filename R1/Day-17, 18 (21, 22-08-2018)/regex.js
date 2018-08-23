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

/*
    Using the hyphen (-) to match a range of characters is 
    not limited to letters. It also works to match a range of numbers. 
*/
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s-2-6]/ig; 
let result = quoteSample.match(myRegex); // ["l", "r", "r", "3", "4", "5", "2", "6", "5", "3", "s", "r", "l", "i", "i", "o", "s"]

/*
    So far, you have created a set of characters that you want to match,
    but you could also create a set of characters that you do not want to match.
    These types of character sets are called negated character sets.

    To create a negated character set, you place a caret character (^) after
    the opening bracket and before the characters you do not want to match.
*/
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/ig;
let result = quoteSample.match(myRegex); //[" ", "b", "l", "n", "d", " ", "m", "c", "."]

/*
    Sometimes, you need to match a character (or group of characters) that appears one or more
    times in a row. This means it occurs at least once, and may be repeated.

    You can use the + character to check if that is the case. Remember, the character or pattern
    has to be present consecutively. That is, the character has to repeat one after the other.
*/
let difficultSpelling = "Mississippi";
let myRegex = /s+/g; 
let result = difficultSpelling.match(myRegex); //["ss", "ss"]

/*
    The last challenge used the plus + sign to look for characters that occur one or more times.
    There's also an option that matches characters that occur zero or more times.

    The character to do this is the asterisk or star: *.
*/
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /A[a]*/; 
let result = chewieQuote.match(chewieRegex);

/*
    Find Characters with Lazy Matching
*/
let text = "<h1>Adonis Mendoza</h1>";
let myRegex = /<h1*>/; 
let result = text.match(myRegex);

/*
    Find One or More Criminals in a Hunt
*/
let crowd = 'P1P2P3P4P5P6CCCP7P8P9';
let reCriminals = /C+/;
let matchedCriminals = crowd.match(reCriminals);
console.log(matchedCriminals);

/*
    Match Beginning String Patterns
*/
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; 
let result = calRegex.test(rickyAndCal);

/*
    Match Ending String Patterns
*/
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; 
let result = lastRegex.test(caboose);

/*
    Match All Letters and Numbers
*/
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; 
let result = quoteSample.match(alphabetRegexV2).length;

/*
    Match Everything But Letters and Numbers
*/
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; 
let result = quoteSample.match(nonAlphabetRegex).length;

/*
    Match All Numbers
*/
let numString = "Your sandwich will be $5.00";
let numRegex = /\d/g;
let result = numString.match(numRegex).length;
