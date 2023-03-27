//Sums of consecutive integers
function position(x, y, n) {
  let devided= Math.floor(y/x);
  if(Number.isInteger(devided)){
    let findIndex = (x/2)-1;
    if (Number.isInteger(findIndex)){
      let final=n-findIndex;
      return devided+final;
    }
  }
  let findIndex = Math.floor(x/2);
  let final=n-findIndex;
  return devided+final;
}