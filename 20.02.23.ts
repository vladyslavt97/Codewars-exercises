export function cubeChecker(volume: number, side: number): boolean{
  if (volume <= 0 || side <= 0){
    return false;
  } else if(volume === (side * side * side)){
    return true;
  } else {
    return false;
  }
}

//Task 1 Anagrams of strings
function getSearchResults(words, queries) {
    const result = [];
    for (let i = 0; i < queries.length; i++){
        const query = queries[i];
        const matches = words.filter(word => {
            const sortedWord = word.split('').sort().join('');
            const sortedQuery = query.split('').sort().join('');
            if(sortedWord === sortedQuery){
                return true;
            }
        });
        if (matches.length > 0) {
            result.push(matches.sort());
        } else {
            result.push([]);
        }
    }
    return result;
}

//Task 2 Anagrmas of numbers
function getAnagram(s) {
    const n = s.length;
    if (n % 2 !== 0) {
        return -1;
    }
    const half = n / 2;
    const freq1 = new Array(10).fill(0);
    const freq2 = new Array(10).fill(0);
    let operations = 0;
    for (let i = 0; i < half; i++) {
        const digit = parseInt(s[i]);
        freq1[digit]++;
    }
    for (let i = half; i < n; i++) {
        const digit = parseInt(s[i]);
        if (freq1[digit] > 0) {
            freq1[digit]--;
        } else {
            operations++;
        }
    }
    return operations;
}



//Murex = Dublin UI Software Developer
function getTime(s) {
    // Write your code here
    let timeRequired = 0;
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let currentPosition = 0;
    for (let i=0; i < s.length; i++){
        let a = alphabet.indexOf(s[i])
        
        let position = Math.abs(currentPosition - a)
        let secondPosition = Math.abs(26-position)
        console.log('position;', position, 'secondPosition: ', secondPosition)
        if(position < secondPosition){
            timeRequired += position
            currentPosition = a;
        } else {
            timeRequired += secondPosition
            currentPosition = a;
        }
    }
    console.log(timeRequired)
    return timeRequired;
}