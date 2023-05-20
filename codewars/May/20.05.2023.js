//Calculate average
function findAverage(array) {
  if (array.length === 0){
    return 0;
  }
  const initialValue = 0;
  const sumWithInitial = array.reduce((accumulator, currentValue) => {
    console.log(array)
    console.log(accumulator, currentValue)
    return accumulator + currentValue;
  });
  return sumWithInitial / array.length;
}