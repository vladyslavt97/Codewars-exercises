export function findMultiples(integer: number, limit: number): number[] {
  //your code here
  let numberOfMultiplications = limit / integer;
  let toItterate = Math.floor(numberOfMultiplications);
  let result: Array<number> = [];
  for (let i = 1; i <= toItterate; i++){
    result.push(integer * i)
  } 
  return result;
}

// console.log(findMultiples(3,10))