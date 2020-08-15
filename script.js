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
let operator = ''
let calculatedResult = ''
let lastKey = ''
let regexNumbers = /[0-9]/;
let regexOperator = /[-*+\[\]/]/
let regexNegateOperator = /[^-*+\[\]/]/

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
            const key = button
            const lastKey = e.target.textContent
            console.log (lastKey)

            //get the first number before the operator 
            if (operator == '') {
                firstNumber += key.textContent
                //console.log ('logging firstNumber: ',firstNumber)
            } 

            //get the second number after the operator
            if (operator != '') {
                secondNumber += key.textContent
                //console.log ('logging secondNumber: ',secondNumber)
            }

            //keeps the display updated with keys pressed
            currentOper.textContent += key.textContent 
        })
    })
}

function displayOperator () {
    operationButtons.forEach (button => {
        button.addEventListener('click', (e) => {
            const key = button
            const keyValue = e.target.textContent

            if (secondNumber != '' && lastKey.match(regexOperator)) {
                calculatedResult = setOperation(operator,parseInt(firstNumber),parseInt(secondNumber))
                firstNumber = calculatedResult 
                secondNumber = '' 
                operator = '' 
            }

            if (currentOper.textContent != '' && keyValue.match(regexOperator)) {
                currentOper.textContent += key.textContent //updates display
                operator = key.textContent //stores operator value
                //console.log('logging displayOperator operator: ',operator)
            }
 
        })
    })
}

function displayResult () {
    equalsButton.addEventListener('click', (e) => {
        calculatedResult = setOperation(operator,parseInt(firstNumber),parseInt(secondNumber))

        currentOper.textContent = calculatedResult //updates display
        console.log ('logging calculatedResult = ',calculatedResult)
        /*
         * assign calculatedResult back to first number, to chain inputs
         * reset second number, awaiting input
         * reset operator, awaiting input
        */
        firstNumber = calculatedResult 
        secondNumber = '' 
        operator = '' 
    })
}

function clearResult () {
    clearButton.addEventListener('click', (e) => {
        currentOper.textContent = ''
        previousOper.textContent = ''
        firstNumber = ''
        secondNumber = ''
        operator = ''
    })
}
