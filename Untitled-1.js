function recursiveIsSorted (arr){

  function issorted(index){
    if(index > arr.length){
    return true;
  }

  if(arr[index] > arr[index +1]){
    return false;
  }
  return issorted(index +1)
}

  return issorted(0)
}




console.log(recursiveIsSorted([1, 2, 3, 4, 5])); // true
console.log(recursiveIsSorted([5, 4, 3, 2, 1])); // false
console.log(recursiveIsSorted([9, 7, 6, 3, 4])); // false
console.log(recursiveIsSorted([9, 9, 9, 9, 9])); // true
console.log(recursiveIsSorted([7])); // true
console.log(recursiveIsSorted([])); // true
