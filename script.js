function add (num1,num2) {
    return num1 + num2;
}

function subtract (num1,num2){
    return num1 - num2;
}

function multiply (num1,num2){
    return num1 * num2
}

function divide (num1,num2){
    return num1 / num2;
}

function operate (operator,num1,num2) { 

}

/*console.log (add(10,12)) //22
console.log (subtract(10,5)) //5
console.log (multiply(10,5)) //50
console.log (divide(12,6)) //2*/

// Global DOM definitions 
const calcKeysEle = document.querySelectorAll('button')
const display = document.querySelector('.display');

function displayValue () {
    calcKeysEle.forEach (button => {
        button.addEventListener('click', () =>{
            console.log (button)
            const key = button
            display.textContent += key.textContent //concat values +=
        })
    })
}

displayValue()