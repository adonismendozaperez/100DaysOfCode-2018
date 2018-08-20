let getLength = (str)=> {
    const {length : len} = str; 
    return len; //12
  }
  
console.log(getLength('FreeCodeCamp'));

//-------------------------------------------

let a = 8, b = 6;
(() => { [a,b] = [b,a] })();

console.log(a); // should be 6
console.log(b); // should be 8

//--------------------------------------------

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  const [,,...arr] = list;
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];