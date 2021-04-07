let firstNumber = '';
let operation = '' ;
let secondNumber = ''

// Calculates the result of the current expression if it is valid, then displays the result on the screen

function calcResult() {
    const calculateIt = (firstNumber, operation, secondNumber) => {
    let result = ''
        
    if (operation === 'add') {
        result = parseFloat(firstNumber) + parseFloat(secondNumber)
    } else if (operation === 'subtract') {
        result = parseFloat(firstNumber) - parseFloat(secondNumber)
    } else if (operation === 'multiply') {
        result = parseFloat(firstNumber) * parseFloat(secondNumber)
    } else if (operation === 'divide') {
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

const add = document.getElementById('add');
add.addEventListener('click', () => {
    console.log('add');
})

const subtract = document.getElementById('subtract');
subtract.addEventListener('click', () => {
    console.log('subtract');
})

const multiply = document.getElementById('multiply');
multiply.addEventListener('click', () => {
    console.log('multiply');
})

const divide = document.getElementById('divide');
divide.addEventListener('click', () => {
    console.log('add');
})

const num7 = document.getElementById('num-7');
num7.addEventListener('click', () => {
    console.log('num7');
})

const num8 = document.getElementById('num-8');
num8.addEventListener('click', () => {
    console.log('num8');
})
const num9 = document.getElementById('num-9');
num9.addEventListener('click', () => {
    console.log('num9');
})
const equal = document.getElementById('equal');
equal.addEventListener('click', () => {
    console.log('equal');
})

const num4 = document.getElementById('num-4');
num4.addEventListener('click', () => {
    console.log('num4');
})
const num5 = document.getElementById('num-5');
num5.addEventListener('click', () => {
    console.log('num5');
})
const num6 = document.getElementById('num-6');
num6.addEventListener('click', () => {
    console.log('num6')
})

const num1 = document.getElementById('num-1');
num1.addEventListener('click', () => {
    console.log('num1');
})
const num2 = document.getElementById('num-2');
num2.addEventListener('click', () => {
    console.log('num2');
})
const num3 = document.getElementById('num-3');
num3.addEventListener('click', () => {
    console.log('num3');
})

const num0 = document.getElementById('num-0');
num0.addEventListener('click', () => {
    console.log('num0');
})
const dot = document.getElementById('dot');
dot.addEventListener('click', () => {
    console.log('dot');
})
const clear = document.getElementById('clear');
clear.addEventListener('click', () => {
    console.log('clear');
})

