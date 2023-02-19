//level 6 Take a Ten Minutes Walk
function isValidWalk(walk) {
  let arrS = [];
  let arrN = [];
  let arrW = [];
  let arrE = [];
  if(walk.length === 10){
    for (let i=0; i<walk.length; i++){
      if (walk[i] === "s"){
        arrS.push(walk[i])
      } else if (walk[i] === "n"){
        arrN.push(walk[i])
      } else if (walk[i] === "w"){
        arrW.push(walk[i])
      } else if (walk[i] === "e"){
        arrE.push(walk[i])
      }
    }
    if (arrS.length === arrN.length && arrE.length === arrW.length){
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

isValidWalk(["s", "w", "n", "e", "s", "w", "n", "e", "s", "n"])