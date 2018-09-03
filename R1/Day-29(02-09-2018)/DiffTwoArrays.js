function diffArray(arr1, arr2) {
    return arr1
       .concat(arr2)
       .filter( el => !arr1.includes(el) || !arr2.includes(el))
   }

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
