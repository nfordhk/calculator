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

const operate = (operation, a, b) => {
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
 * click events
 * 
 */

numberButtons.forEach (button => {
    button.addEventListener('click', (e) => {
        const key = button.textContent //assign button html contents to key variable
        currentOper.textContent += key //update display with keys pressed

        firstNumber += key //assign keys pressed to firstNumber
        console.log ('logging firstNumber: ',firstNumber)
    })
})

operationButtons.forEach (button => {
    button.addEventListener('click', (e) => {

        if (button.className == 'operator') {
            const key = button.textContent //assign button html contents to key variable
            currentOper.textContent += key //update display with keys pressed
        } 
    })
})

