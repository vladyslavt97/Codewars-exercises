function arrayPlusArray(arr1, arr2) {
  let sum = 0;
  for( let i=0; i<arr1.length; i++){
    sum += arr1[i];
  }
  for( let y=0; y<arr2.length; y++){
    sum += arr2[y];
  }
  return sum;
}