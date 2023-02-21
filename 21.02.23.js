// Minimum Add to Make Parentheses Valid (leetcode)

var minAddToMakeValid = function(s) {
    let arr1 = []
    let arr2 = []
    let parenthesis = s.split('')
    for (let i = 0; i < parenthesis.length; i++){
        if(parenthesis[i] === "("){
            arr1.push(parenthesis[i])
        } else {
            arr2.push(parenthesis[i])
        }
    }
    console.log(arr1.length, arr2.length)
    if (arr2.length > arr1.length){
     return a = arr2.length - arr1.length;
    } else {
        return a = arr1.length - arr2.length;
    }
}