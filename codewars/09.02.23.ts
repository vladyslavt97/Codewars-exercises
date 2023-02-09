export function powersOfTwo(n:number):number[]{
  let result: Array<number> = [];
  for (let i=0; i<=n; i++){  
    result.push(2 ** i);
  }
  return result;
}

// console.log(powersOfTwo(5))