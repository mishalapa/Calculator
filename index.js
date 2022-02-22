class Calculator {
    constructor(previousOperandText, currentOperandText) {
        this.previousOperandText = previousOperandText
        this.currentOperandText = currentOperandText
        this.clear()
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    appendNumber(number) {
        if(this.currentOperand.length > 56) return
        if(number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }
   
    chooseOperation(operation) {
        if(!this.currentOperand) return
        if(this.previousOperand !== '') {
            this.compute()
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    compute() {
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if(isNaN(prev) || isNaN(current)) return;
        switch(this.operation) {
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case '*':
                computation = prev * current
                break
            case '÷':
                computation = prev / current
                break
            default: 
                return
        }
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = ''
    }

    updateDisplay() {
        this.currentOperandText.innerHTML = this.currentOperand;
        this.previousOperandText.innerHTML = this.previousOperand;
    }
} 








const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-clear]')
const previousOperandText = document.querySelector('[data-previous]')
const currentOperandText = document.querySelector('[data-current]')

const calculator = new Calculator(previousOperandText, currentOperandText);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerHTML);
        calculator.updateDisplay()
    })
} )

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerHTML);
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', () => {
    calculator.compute()
    calculator.updateDisplay()
})


allClearButton.addEventListener('click', () => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', () => {
    calculator.delete()
    calculator.updateDisplay()
})

  const body = document.body
  body.addEventListener('keydown', newWordSearchEnter);

  function newWordSearchEnter(e)  {
    if (e.keyCode === 96) {
        calculator.appendNumber(0)
        calculator.updateDisplay()
    }
    if (e.keyCode === 97) {
        calculator.appendNumber(1)
        calculator.updateDisplay()
    }
    if (e.keyCode === 98) {
        calculator.appendNumber(2)
        calculator.updateDisplay()
    }
    if (e.keyCode === 99) {
        calculator.appendNumber(3)
        calculator.updateDisplay()
    }
    if (e.keyCode === 100) {
        calculator.appendNumber(4)
        calculator.updateDisplay()
    }
    if (e.keyCode === 101) {
        calculator.appendNumber(5)
        calculator.updateDisplay()
    }
    if (e.keyCode === 102) {
        calculator.appendNumber(6)
        calculator.updateDisplay()
    }
    if (e.keyCode === 103) {
        calculator.appendNumber(7)
        calculator.updateDisplay()
    }
    if (e.keyCode === 104) {
        calculator.appendNumber(8)
        calculator.updateDisplay()
    }
    if (e.keyCode === 105) {
        let number = 9;
        calculator.appendNumber(9)
        calculator.updateDisplay()
    }
    if (e.keyCode === 106) {
        calculator.chooseOperation('*')
        calculator.updateDisplay()
    }
    if (e.keyCode === 107) {
        calculator.chooseOperation('+')
        calculator.updateDisplay()
    }
    if (e.keyCode === 109) {
        calculator.chooseOperation('-')
        calculator.updateDisplay()
    }
    if (e.keyCode === 110) {
        let number = '.';
        calculator.appendNumber('.')
        calculator.updateDisplay()
    }
    if (e.keyCode === 111) {
        calculator.chooseOperation('÷')
        calculator.updateDisplay()
    }
    if (e.keyCode === 13) {
        e.preventDefault();
        calculator.compute()
        calculator.updateDisplay()
    }
    if (e.keyCode === 46) {
        calculator.delete()
        calculator.updateDisplay()
    }
    if (e.keyCode === 8) {
        calculator.clear()
        calculator.updateDisplay()
    }
  }