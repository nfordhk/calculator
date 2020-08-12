const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
  };

  
function inputDigit(digit) {
    //const { displayValue } = calculator;
    const displayValue = calculator.displayValue
    console.log (displayValue)

    // Overwrite `displayValue` if the current value is '0' otherwise append to it
    calculator.displayValue = displayV  alue === '0' ? digit : displayValue + digit;
  }

  function updateDisplay() {
    // select the element with class of `calculator-screen`
    const display = document.querySelector('.current-operand');
    // update the value of the element with the contents of `displayValue`
    display.value = calculator.displayValue;
  }
  
  updateDisplay();


const keys = document.querySelector('.calculator');
console.log (keys)
keys.addEventListener('click', (event) => {
  // Access the clicked element
  const target = event.target;
  //const { target } = event;

  // Check if the clicked element is a button.
  // If not, exit from the function
  if (!target.matches('button')) {
    return;
  }

  if (target.classList.contains('operator')) {
    console.log('operator', target.value);
    return;
  }

  if (target.classList.contains('decimal')) {
    console.log('decimal', target.value);
    return;
  }

  if (target.classList.contains('all-clear')) {
    console.log('clear', target.value);
    return;
  }

  inputDigit(target.value);
  updateDisplay();
});

