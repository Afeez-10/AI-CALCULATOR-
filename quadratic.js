let A=Number(prompt("Value of a"));
let B=Number(prompt("Value of b"));
let C=Number(prompt("Value of c"));
let x1=((-B+((B*B-(4*A*C))**(0.5)))/(2*A));
let x2=((-B-((B*B-(4*A*C))**(0.5)))/(2*A));
let answers=[x1,x2];
console.log(answers);

function
answersfunc() {
 document.getElementById("quadanswers") 
 .innerHTML="Hi";  
}
