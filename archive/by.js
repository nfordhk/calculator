/****
 *
 * Declare Vars
 *
 **/
//Elements we need
const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const deleteButton = document.querySelector("[data-delete]");
const equalsButton = document.getElementById("operator-equals");
const display = document.getElementById("display");

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

const updateDisplay = (input, element) => {
  //checking event type
  const isNumber =
    element.target.attributes[0].name === "data-number" ? true : false;
  const isOperation =
    element.target.attributes[0].name === "data-operation" ? true : false;
  const isEquals =
    element.target.attributes[0].name === "data-equals" ? true : false;

  //check if number
  if (isNumber) {
    console.log("number fired");
    return (display.textContent += input);
  }

  //check if operatior
  if (isOperation) {
    console.log("operation fired");
    return (display.textContent += input);
  }

  //check if equals
  if (isEquals) {
    console.log("equal fired");
    display.textContent = "";
    //can this this variable to keep state of calculations
    hasBeenCalculated = true;
    return (display.textContent += input);
  }
  //Wishlist:check if clear
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
    const parsedInt = parseInt(e.srcElement.innerHTML);
    updateDisplay(parsedInt, e);
  });
});

//operations
operationButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    //grabbing number value would probably do this in attribute tho
    const parsedOperation = e.srcElement.innerHTML;
    updateDisplay(parsedOperation, e);
  });
});

//Set Equals event

equalsButton.addEventListener("click", (e) => {
  const parsedAnswer = evaluateExpression(display.textContent);
  updateDisplay(parsedAnswer, e);
});
