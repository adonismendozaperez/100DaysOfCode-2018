let frankenSplice = (arr1, arr2, n) =>{
    let newArr = arr2.slice(0,arr2.length).splice(n, 0,...arr1);
    newArr.splice(n, 0,...arr1);
    return newArr;
  }
frankenSplice([1, 2, 3], [4, 5, 6], 1);