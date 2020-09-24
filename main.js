const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;
let displayVal = '';
let store;
let operator='';
let num1;
let num2;
let opRegex = /(\+|-|x|\/)$/;

const operate = (oper, num1, num2) => {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
if (oper=="+") {
    return add(num1,num2);
} else if (oper=="-") {
    return subtract(num1,num2);
} else if (oper=="x") {
    return multiply(num1,num2);
} else if (oper=="/") {
    return divide(num1,num2);
} else {
    return "error"
}
}


const container = document.querySelector('container')
const digits = document.getElementsByClassName('digit');
const display = document.getElementById('display');
const operators = document.getElementsByClassName('operator');
const equal = document.getElementById('equal');
const clear = document.getElementById('clear');
const decimal = document.getElementById('decimal');


Array.from(digits).forEach((btn) => {
    btn.addEventListener('click', function(e) {
        if (opRegex.test(displayVal)) {
            displayVal = '';
        }
        store = e.target.textContent;
        displayVal +=store;
        display.textContent = displayVal;
    })
});

Array.from(operators).forEach((btn) => {
    btn.addEventListener('click', function(e) {
        if (operator!='') {
            num2 = displayVal
            if (operator=='/' && num2==0){
                displayVal = 'Nice try, Judas!'
            } else {
                displayVal = Math.round(100*operate(operator,num1,num2))/100;
            }
        }
        store = e.target.textContent;
        operator=store;
        console.log(operator);
        num1 = displayVal;
        display.textContent = displayVal;
        displayVal += operator;
    })
});

equal.addEventListener('click', function() {
    if (operator!='') {
        console.log('equals happening..')
        num2 = displayVal
            if (operator=='/' && num2==0){
                displayVal = 'Nice try, Judas!'
            } else {
                displayVal = Math.round(100*operate(operator,num1,num2))/100;
            }
        display.textContent = displayVal;
        num1=displayVal;
        num2=''
        operator=''
    }
});

clear.addEventListener('click', function() {
    display.textContent = 'Cleared, Sir';
    num1='';
    num2='';
    operator='';
    displayVal='';
})

decimal.addEventListener('click', function(e) {
    store = e.target.textContent;
    displayVal +=store;
    display.textContent = displayVal;
})
