//Excel sheet column numbers
function titleToNumber(title) {
  let final = 0;
    for(let i=0; i<title.length; i++){
      const letterNum = title.charCodeAt(i) - 64;
      final += letterNum*26**(title.length - i - 1);
    }
    return final;
}