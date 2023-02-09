console.log('the nodemon is running...');

function convertMilliseconds(M){
    let result = 0;
    const date = new Date(M);
    if(date.getUTCDay()===0){
        return 7;
    }else {
        return date.getUTCDay();
    }
}
// console.log(convertMilliseconds(1613132555000)) ;


//
function isValid(number) {
    var result ="-404";
    let correct = /^\+1 [6-9][0-9]{3} [0-9]{3} [0-9]{3}$/;
    if(correct.test(number)){
        result = 'Yes';
    } else{
        result = 'No';
    }
    return result;
}
// console.log(isValid("+1 5789 234 234"));