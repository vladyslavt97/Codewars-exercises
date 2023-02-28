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