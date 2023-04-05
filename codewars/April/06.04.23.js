//Sum even numbers
function sumEvenNumbers(input) {
  let newNum = 0;
  for(let i in input){
    if(input[i] % 2 === 0){
      newNum += input[i]
    }
  }
  return newNum;
}