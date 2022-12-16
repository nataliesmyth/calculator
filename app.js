// first step: select all of our buttons
// we will use data attributes to keep styling classes and JS classes separate

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextEl = document.querySelector('[data-previous-operand]')
const currentOperandTextEl = document.querySelector('[data-current-operand]')