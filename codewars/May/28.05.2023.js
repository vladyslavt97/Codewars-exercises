//Training JS #18: Methods of String object--concat() split() and its good friend join()
//to do it more often
const splitAndMerge = (string, separator) => string.split(" ").map(el => el.split("").join(separator)).join(" ");