/****
 * 
 * Declare DOM
 * 
 **/

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const clearButton = document.querySelector('[data-clear]')
const previousOper = document.querySelector('[data-previous-operand]')
const currentOper = document.querySelector('[data-current-operand]')

/****
 * 
 * Declare Vars
 * 
 **/

let firstNumber = ''
let secondNumber = ''
let operand = ''

/****
 * 
 * Math Functions
 * 
 ***/

const add = (a, b) => a + b
const subtract = (a, b) => a - b
const multiply = (a, b) => a * b
const divide = (a, b) =>  a / b

/***
 * 
 * Operate
 * 
 */

const setOperation = (operation, a, b) => {
    switch (operation) {
        case '+':
            return add(a, b)
        case '-':
            return subtract(a, b)
        case '*':
            return multiply(a, b)
        case '/':
            if (b != 0) {
                return divide(a, b)
            } else {
                return 'Cannot Divide By 0'
            }
        default:
            return
    }
}
/***
 * 
 * Display
 * 
 */

function updateDisplay () {
    displayNumbers()
    displayOperator()
    displayResult()
    clearResult()
}

updateDisplay ()


function displayNumbers () {
    numberButtons.forEach (button => {
        button.addEventListener('click', (e) => {
            console.log (e.target)
            const key = button

            //get the first number before the operand 
            if (operand.length == 0) {
                firstNumber += key.textContent
                console.log (firstNumber)
            }

            //get the second number after the operand
            if (operand.length == 1) {
                secondNumber += key.textContent
                //previousOper.textContent = currentOper.textContent 
                console.log (secondNumber)
            }
            currentOper.textContent += key.textContent
        })
    })
}

function displayOperator () {
    operationButtons.forEach (button => {
        button.addEventListener('click', (e) => {
            console.log (e.target)
            const key = button
            currentOper.textContent += key.textContent
            operand = key.textContent //stores operand value
            console.log(operand)
        })
    })
}

function displayResult () {
    equalsButton.addEventListener('click', (e) => {
        currentOper.textContent = setOperation(operand,Number(firstNumber),Number(secondNumber))
    })
}

function clearResult () {
    clearButton.addEventListener('click', (e) => {
        console.log (e)
        currentOper.textContent = ''
        previousOper.textContent = ''
        firstNumber = ''
        secondNumber = ''
        operand = ''
    })
}





//===========================================
//              OLD CODE                    
//===========================================
/*
function displayNumbers () {
    const numberRegex = /[0-9]/g;
    const operandRegex = /[-+/*]/

    numberButtons.forEach (button => {
        button.addEventListener('click', (e) => {
            console.log (e.target)
            const key = button
            if (operand.length == 0) {
                firstNumber += key.textContent
                console.log (firstNumber)
            } else if (operand.length == 1) {
                secondNumber += key.textContent
                console.log (secondNumber)
            }
            const firstNumber = currentOper.textContent += key.textContent
            const operand = currentOper.textContent
            currentOper.textContent += key.textContent
            console.log ('This is the first number',firstNumber.match(numberRegex).join('')) 
            console.log ('This is the operand ',operand.match(operandRegex))
        })
    })
}
*/