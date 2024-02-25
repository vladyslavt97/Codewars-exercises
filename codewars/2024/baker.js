function cakes(recipe, available) {
  let arrayOfDivisions = [];
  Object.keys(recipe).map(r=>{
    if(available.hasOwnProperty(r)){
      arrayOfDivisions.push(Math.floor(available[r] / recipe[r]));
    } else {
      arrayOfDivisions.push(0);
    }

  })
  if(arrayOfDivisions.includes(0)){
    return 0
  } else {
    return Math.min(...arrayOfDivisions);
  }
}