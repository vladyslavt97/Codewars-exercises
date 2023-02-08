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
console.log(convertMilliseconds(1613132555000));
