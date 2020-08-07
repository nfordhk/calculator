/****
 * 
 * Declare Vars
 * 
 **/

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const clearButton = document.querySelector('[data-clear]')
const previousOper = document.querySelector('[data-previous-operand]')
const currentOper = document.querySelector('[data-current-operand]')


//Intializing Needed
let hasBeenCalculated = false;

//Cacluate using built in javascript functions and diring on call
const evaluateExpression = (expression) => {
  return new Function("return " + expression)();
};

/***
 *
 * Calculator Display
 *
 * Create the functions that populate the display when you click the number buttons…
 * you should be storing the ‘display value’ in a variable somewhere for use in the next step.
 *
 */


const updateDisplay = (input, e) => {
    //check if number
    if (e.target.attributes[0].name === "data-number") {
      console.log("number fired");
      return (currentOper.textContent += input);
    }
  
    //check if operatior
    if (e.target.attributes[0].name === "data-operation") {
      console.log("operation fired");
      return (currentOper.textContent += input);
    }
  
    //check if equals
    if (e.target.attributes[0].name === "data-equals") {
      console.log("equal fired");
      currentOper.textContent = "";
      //can this this variable to keep state of calculations
      hasBeenCalculated = true;
      return (currentOper.textContent += input);
    }
  };

/***
 *
 * Click events
 *
 */

//numbers
numberButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      //grabbing number value would probably do this in attribute tho
      const key = button
      updateDisplay(key.textContent, e);
    });
  });

//operations
operationButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        //grabbing number value would probably do this in attribute tho
        const key = button
        updateDisplay(key.textContent, e);
    });
  });
  
//Set Equals event
equalsButton.addEventListener("click", (e) => {
    const key = evaluateExpression(currentOper.textContent);
    updateDisplay(key, e);
});
  




