//Split a String into an Array Using the split Method
let splitify = (str) =>  str.split(/\W/)
splitify("Hello World,I-am code");

//Combine an Array into a String Using the join Method
let sentensify = (str) =>  str.split(/\W+/).join(" ");

sentensify("May-the-force-be-with-you");

//Apply Functional Programming to Convert Strings to URL Slugs
let urlSlug = (title) => [].concat(title.trim().toLowerCase().split(/\W+/)).join("-");

urlSlug("Winter Is Coming"); // Should be "winter-is-coming"

/*
 Using the every Method to Check
 that Every Element in an Array Meets a Criteria
*/
let checkPositive = (arr) => arr.every((val)=> val >= 0)

checkPositive([1, 2, 3, -4, 5]);

/*
 Use the some Method to Check
 that Any Elements in an Array Meet a Criteria
*/
let checkPositive = (arr) => arr.some((val)=>val >=0)

checkPositive([1, 2, 3, -4, 5]);

//Introduction to Currying and Partial Application
let add = (x,y,z) =>  y => z  =>  x + y + z;

add(10)(20)(30);