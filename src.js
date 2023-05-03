let firstOperandEntered = false;
let firstOperand = '';
let secondOperand = '';
let operator = '';
let result = 0;
const operators = ['add', 'subtract' , 'multiply' , 'divide'];


// add eventlisteners to numbers
for(let i = 0 ; i <= 9; i++){
    let numberElement =  document.querySelector(`#num${i}`);
    numberElement.addEventListener('click', handleNumberClick);
}

// add event listers to operators
operators.forEach(operator => {
    let operatorElement =  document.querySelector(`#${operator}`);
    operatorElement.addEventListener('click',handleOperatorClick);
});

const evaluateElement = document.querySelector('#evaluate');
evaluateElement.addEventListener('click', handleEvalClick);

const displayElement = document.querySelector('#display');
console.log(displayElement);


/******Functions *******/
function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operate(num1,num2,operator){
    switch(operator){
        case '+':
            return add(num1,num2);
        case '-':
            return subtract(num1,num2);
        case '*':
            return multiply(num1,num2);
        case '/':
            return divide(num1,num2);
    }
    console.log(result);
}

function handleNumberClick(){
    if(!firstOperandEntered){
        firstOperand  += (this.textContent);
    }else{
        secondOperand += (this.textContent);
    }
    console.log(`1st:${firstOperand} , 2nd:${secondOperand}`);
}

function handleOperatorClick(){
    operator = this.textContent;
    firstOperandEntered = true;
}

function handleEvalClick(){
    console.log(`1st:${+firstOperand} , 2nd:${+secondOperand} , oper:${operator}`);
    result = operate(+firstOperand,+secondOperand,operator);
    console.log(result);
    displayElement.textContent = result;
    firstOperand = result;
}





// operate(1,2,'+');
// operate(1,2,'-');
// operate(1,2,'*');
// operate(1,2,'/');


// what functionality arewe after here?
// adhere to the BEDMAS
/*

(1+3)/3*3
 
1+1*1*1
1+3/3*3/3*3/3

1+(3/3)*(3/3)*(3/3)
1+1*1*1



1.) Split with subtractions
2.) Split with additions
3.) Split with multiplication
4.) Split with division
5.) Split with brackets


1+3/3*3/3*3/3

1,3/3*3/3*3/3

-,3/3,3/3,3/3

-,


--------------

(1+3)/(3*3/3*3/3)



if I could find a way to evaluate the bracketed
expressions and then insert the evaluated expresion
back to its place then we the algorithm going backwards
from BEDMAS might work.

Another issue which I am not sure to resolve is
what if there are next bracket expersions?




*/

/*
let exp = '(3+3+3)/(234)';
let reg =/(\(.*?\))/gm;
let match = reg.exec(exp);

while(match){
    console.log(match[1]);
    match = reg.exec(exp)
}
*/


// if we dont include the bracket and the operations are sequetial how can I do it?
// 1+3-3/3*4 = 
// 