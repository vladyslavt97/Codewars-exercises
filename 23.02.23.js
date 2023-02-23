//Replace With Alphabet Position
function alphabetPosition(text) {
  let numbers = [];
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let arr = alphabet.split('')
  for (let i = 0; i < text.length; i++){
    for (let a = 0; a < arr.length; a++){
      let letter = text[i].toLowerCase()
      if(letter === alphabet[a]){
        numbers.push(alphabet.indexOf(letter) + 1)
      }
    }
  }
  let stringComas = numbers.toString().replaceAll(',', ' ')
  return stringComas;
}



//Moving Zeros To The End
function moveZeros(arr) {
  let newArr = [];
  let zeros = [];
  for (let i = 0; i < arr.length; i++){
    if ( arr[i] === 0){
      zeros.push(arr[i]);
    } else {
      newArr.push(arr[i])
    }
  }
  return newArr.concat(zeros)
}

//Power
function numberToPower(number, power){
  let total = 1;
  for (let i = 1; i <= power; i++){
    total = total * number;
  }
  return total;
}