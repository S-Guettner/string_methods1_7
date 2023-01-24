const text = "Sam is good at codingschool";

let first = text.replace("good","bad")
let firstFull = first.replace("codingschool","school")
console.log(firstFull);

let second =  firstFull.replace("Sam","susi")
let secondFull = second.replace("bad","good")
console.log(secondFull);

let third = text.replace("codingschool","tennis")
console.log(third);

document.write( firstFull + "<br>")
document.write( secondFull + "<br>")
document.write( third + "<br>")
