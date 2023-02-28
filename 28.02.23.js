//Music Theory
function getInterval(note1, note2) {
  let notes = "CDEFGAB"
  let allNotesOfKeyboard = [];
  for (let j=0; j<=8;j++){
    for (let i=0; i<notes.length;i++){
      allNotesOfKeyboard.push(`${notes[i]}${j}`)
    }
  }
  let index1 = allNotesOfKeyboard.indexOf(note1)
  let index2 = allNotesOfKeyboard.indexOf(note2)
  if (index1 < index2){
    return index2 - index1 + 1;
  } else if (index1 === index2){
    return 1;
  }else {
    return index1 - index2 + 1;
  }
}


//Jenny the youngest detective
function missingWord(nums, str) {
  let arr = [];
  let stringLowerCase = str.replace(/\s/g, '').toLowerCase();
  let sortedNums = nums.sort(function(a, b) {
    return a - b;
  });
  for (let i = 0; i<sortedNums.length; i++){
    let foundLetter = stringLowerCase.charAt(sortedNums[i])
    if(foundLetter){
      arr.push(foundLetter)
    } else {
      return "No mission today"
    }
  }
  return arr.toString().replace(/\,/g, '')
}