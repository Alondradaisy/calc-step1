let firstNumber = '';
let operation = '' ;
let secondNumber = ''

// Calculates the result of the current expression if it is valid, then displays the result on the screen

function calcResult() {
    const calculateIt = (firstNumber, operator, secondNumber) => {
    let result = ''
        
    if (operator === 'add') {
        result = parseFloat(firstNumber) + parseFloat(secondNumber)
    } else if (operator === 'subtract') {
        result = parseFloat(firstNumber) - parseFloat(secondNumber)
    } else if (operator === 'multiply') {
        result = parseFloat(firstNumber) * parseFloat(secondNumber)
    } else if (operator === 'divide') {
        result = parseFloat(firstNumber) / parseFloat(secondNumber)
    }
        return result
    }
}
  
// Handles when an operation button is pressed (+, -, /, *)

function operationPressed(op) {
if (
    action === 'add' ||
    action === 'subtract' ||
    action === 'multiply' ||
    action === 'divide'
    ) {
    operation.classList.add('operationPressed');
    }
}
  
// Handles when a number button is pressed
function numberPressed('') {
    if(number === 0) {
        number = value;
    }else {
        number = number + value.toString();
    }
    return numberPressed;
}
// Clears the screen
function clearScreen() {
    firstNumber === 0 || operation === 0 || secondNumber === 0;
    return clearScreen;    
}

  // Updates the screen based on `firstNumber`, `operation`, and `secondNumber`
function updateScreen() {
    screen.innerText = '';
}
  // TODO: write query selectors and add event listeners to the calculator's buttons

