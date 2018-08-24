let x = 6, y = 3;
let getNine = ()=> x + y;
  
console.log(getNine());

/*
 Catch Off By One Errors When Using Indexing
*/
async function countToFive() {
    let firstFive = "12345";
    let len = firstFive.length;

    for await (let i of firstFive) {
      console.log(i);
    }
}
countToFive();