let findElement = (arr, func)=> {
    let filterArr = arr.filter(func);
    return filterArr[0];
 }
findElement([1, 2, 3, 4], num => num % 2 === 0);