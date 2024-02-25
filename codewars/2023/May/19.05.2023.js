function nameShuffler(str){
  return str.split(" ").reverse().join(",").replace(",", " ");
}


//Beginner Series #1 School Paperwork
function paperwork(n, m) {
  if (n < 0 || m < 0){
    return 0;
  } else {
    return n * m;
  }
}

//Did she say hallo?
function validateHello(greetings) {
  if (greetings.toLowerCase().includes("hello") || 
      greetings.toLowerCase().includes("ciao") || 
      greetings.toLowerCase().includes("salut") || 
      greetings.toLowerCase().includes("hallo") || 
      greetings.toLowerCase().includes("hola") || 
      greetings.toLowerCase().includes("ahoj") || 
      greetings.toLowerCase().includes("czesc")
     ){
    return true;
  } else {
    return false;
  }
}