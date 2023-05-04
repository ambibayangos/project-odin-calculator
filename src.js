let firstOperandEntered = false;
let firstOperand = '';
let secondOperand = '';
let operator = '';
let result = 0;
let dotExist = false;
const operators = ['add', 'subtract' , 'multiply' , 'divide'];

// need to handle when two operator are pressed in succession
// need to handle division by zero


/****** Assign event listeners *******/
for(let i = 0 ; i <= 9; i++){
    let numberElement =  document.querySelector(`#num${i}`);
    numberElement.addEventListener('click', handleNumberClick);
}

operators.forEach(operator => {
    let operatorElement =  document.querySelector(`#${operator}`);
    operatorElement.addEventListener('click',handleOperatorClick);
});

const evaluateElement = document.querySelector('#evaluate');
evaluateElement.addEventListener('click', evaluateExpression);

const displayElement = document.querySelector('#display');

const dotElement = document.querySelector('#decimal');
dotElement.addEventListener('click', handleDotClick);

const clearElement = document.querySelector('#clear');
clearElement.addEventListener('click', handleClearClick);

const backSpaceElement = document.querySelector('#backscpace');
backSpaceElement.addEventListener('click', handleBackSpaceClick);


/****** Functions *******/
function operate(num1,num2,operator){
    switch(operator){
        case '+':
            return num1+num2;
        case '-':
            return num1-num2;
        case '*':
            return num1*num2;
        case '/':
            if(num2 === 0){
                handleDivisionByZero();
                return Infinity;
            }
            return num1/num2;
    }
}

function handleNumberClick(){
    if(!firstOperandEntered){
        firstOperand  += (this.textContent);
    }else{
        secondOperand += (this.textContent);
    }
    console.log(`1st:${firstOperand},2nd:${secondOperand}`);
}

function handleOperatorClick(){

    if(firstOperandEntered && secondOperand !== ''){
        evaluateExpression();
        secondOperand = '';
    }

    operator = this.textContent;
    firstOperandEntered = true;
    dotExist = false;
}

function evaluateExpression(){
    console.log(`${+firstOperand}${operator}${+secondOperand}`);
    result = operate(+firstOperand,+secondOperand,operator);
    if(result === Infinity) return;
    console.log(result);
    displayElement.textContent = result;
    firstOperand = result;
    secondOperand = '';
}

function handleDotClick(){
    if(dotExist) return;

    if(!firstOperandEntered){
        firstOperand  += (this.textContent);
    }else{
        secondOperand += (this.textContent);
    }
    dotExist = true;
}

function handleClearClick(){
    firstOperandEntered = false;
    firstOperand = '';
    secondOperand = '';
    operator = '';
    result = 0;
    dotExist = false;
    displayElement.textContent  = 0;
}

function handleDivisionByZero(){
    firstOperandEntered = false;
    firstOperand = '';
    secondOperand = '';
    operator = '';
    result = 0;
    dotExist = false;
    displayElement.textContent  = 'smh...';
}

function handleBackSpaceClick(){
    if(!firstOperandEntered){
        firstOperand = firstOperand.slice(0,firstOperand.length - 1);
    }else{
        secondOperand = secondOperand.slice(0,secondOperand.length - 1);
    }
}