export function powersOfTwo(n:number):number[]{
  let result: Array<number> = [];
  for (let i=0; i<=n; i++){  
    result.push(2 ** i);
  }
  return result;
}

// console.log(powersOfTwo(5))


export function humanYearsCatYearsDogYears(humanYears: number): [number, number, number] | undefined {
  // Your code here!
  if (humanYears === 1){
    return [humanYears, 15, 15];
  } else if (humanYears === 2){
    return [humanYears, 24, 24];
  } else if(humanYears > 2){
    let catYears = (humanYears-2)*4 + 24;
    let dogYears = (humanYears-2)*5 + 24;
    return [humanYears, catYears, dogYears];
  }
  return undefined;
}

console.log(humanYearsCatYearsDogYears(25));
