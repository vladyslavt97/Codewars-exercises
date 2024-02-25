//Training JS #18: Methods of String object--concat() split() and its good friend join()
//to do it more often
const splitAndMerge = (string, separator) => string.split(" ").map(el => el.split("").join(separator)).join(" ");


function points(games) {
  let xCount = 0;
  for (let i = 0; i < games.length; i++){
    if(parseInt(games[i]) === parseInt(games[i].slice(-1))){
      xCount++;
    } else if (parseInt(games[i]) > games[i].slice(-1)){
      xCount += 3;
    } else {
      continue;
   }
  }
  return xCount;
}