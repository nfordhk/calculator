function add (a, b) {
    return a + b;
}

function subtract (a, b){
    return a - b;
}

function multiply (a, b){
    return a * b;
}

function divide (a, b){
    if (b === 0 ) {
        alert ('Cannot divide by zero')
        return 0;
    }
    return a / b;
}

function operate (a, operator, b) { 
    let result = 0;
}

/*
console.log (add(10,12)) //22
console.log (subtract(10,5)) //5
console.log (multiply(10,5)) //50
console.log (divide(12,6)) //2
*/

// Global DOM definitions 
/*const calcKeysEle = document.querySelectorAll('button')
const currnetDisplay = document.querySelector('.current-operand');

function displayValue () {
    calcKeysEle.forEach (button => {
        button.addEventListener('click', (e) =>{
            console.log (e.target)
            const key = button
            currnetDisplay.textContent += key.textContent
        })
    })
}

displayValue()*/

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const clearButton = document.querySelector('[data-clear]')
const previousOper = document.querySelector('[data-previous-operand]')
const currentOper = document.querySelector('[data-current-operand]')

function display () {
    displayNumbers()
    displayOperator()
}

display ()

function displayNumbers () {
    numberButtons.forEach (button => {
        button.addEventListener('click', (e) => {
            console.log (e.target)
            const key = button
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
        })
    })
}


/*
console.log(numberButtons)
console.log(operationButtons)
console.log(equalsButton)
console.log(deleteButton)
console.log(clearButton)
console.log(previousOper)
console.log(currentOper)
*/