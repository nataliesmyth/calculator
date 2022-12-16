// second step, but clearer when class is at the top
// What's the best way to create the calculator functionality?
// How are we going to store the imformation given when the user clicks a specific button?
// Classes

class Calculator {
    constructor(previousOperandTextEl, currentOperandTextEl) {
        this.previousOperandTextEl = previousOperandTextEl
        this.currentOperandTextEl = currentOperandTextEl
        this.clear()
    }
    
    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }
    
    delete() {
        
    }
    
    appendNumber(number) {
        this.currentOperand = number
    }
    
    chooseOperation(operation) {
        
    }
    
    compute() {
        
    }
    
    updateDisplay() {
        this.currentOperandTextEl.innerText = this.currentOperand
    }
}
// first step: select all of our buttons
// we will use data attributes to keep styling classes and JS classes separate

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextEl = document.querySelector('[data-previous-operand]')
const currentOperandTextEl = document.querySelector('[data-current-operand]')

// step 3: create a calculator

const calculator = new Calculator(previousOperandTextEl, currentOperandTextEl);

// select number buttons
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})
