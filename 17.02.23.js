function isDivisible(n, x, y) {
  if (Number.isInteger(n / x) && Number.isInteger(n/y)){
    return true;
  } else {
    return false;
  }
}


//Century From Year
function century(year) {
  let toRound = year / 100;
  let lastTwo = toRound.toString().slice(-2);
  if(lastTwo !== 00){
    return Math.ceil(toRound)
  }else {
    return toRound.slice(2)
  }
}
// century(1997);

//Square & sum
function squareSum(numbers){
  let squares = [];
  let sum = 0;
  numbers.forEach(el=>{
    squares.push(el*el);
  })
  for(let i=0; i<squares.length; i++){
    sum += squares[i];
  }
   return sum;
}
// squareSum([2,5,8])


function squareSum(numbers){
  return numbers.reduce((f,d)=>{
    return (d*d)+f
  },0)
}
//another solution 


//ASCII Total
function uniTotal (string) {
 return string.split('').reduce((a,b)=>{
   return a+b.charCodeAt()
 },0)
}

// uniTotal('property')


