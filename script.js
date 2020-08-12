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
let calculatedResult = ''

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
                return 'error'
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
    //deleteFromDisplay () 
}

updateDisplay ()

/***
 * 
 * Populate Display
 * 
 */

function displayNumbers () {
    numberButtons.forEach (button => {
        button.addEventListener('click', (e) => {
            //console.log (e.target)
            const key = button

            //get the first number before the operand 
            if (operand.length == 0) {
                firstNumber += key.textContent
                console.log ('logging firstNumber: ',firstNumber)
            } 

            //get the second number after the operand
            if (operand.length == 1) {
                console.log ('logging length',operand.length)
                secondNumber += key.textContent
                console.log ('logging secondNumber: ',secondNumber)
            }
            currentOper.textContent += key.textContent

            if (operand == true ) {
                console.log ('true')
            }
        })
    })
}

function displayOperator () {
    operationButtons.forEach (button => {
        button.addEventListener('click', (e) => {
            //console.log (e.target)
            const key = button

            currentOper.textContent += key.textContent
            operand = key.textContent //stores operand value
            console.log('logging displayOperator operand: ',operand)
        })
    })
}

function displayResult () {
    equalsButton.addEventListener('click', (e) => {
        calculatedResult = setOperation(operand,Number(firstNumber),Number(secondNumber))
        currentOper.textContent = calculatedResult
        console.log ('logging calculatedResult = ',calculatedResult)
    })
}
/*
function deleteFromDisplay () {
    deleteButton.addEventListener('click', (e) => {
    })
}*/

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
