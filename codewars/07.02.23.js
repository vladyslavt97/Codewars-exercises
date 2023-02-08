//even or odd
function evenOrOdd(number) {
  if (number % 2 === 0){
    return "Even"
  } else if (number % 2 === 1 || number % 2 === -1){
    return "Odd"
  } 
}

// console.log(evenOrOdd(41));


//reverse words order
function reverseWords(str){
  return str.split(' ').reverse().toString().replace(/,/g, " ")
}
// console.log(reverseWords('this is a coding challenge'));
