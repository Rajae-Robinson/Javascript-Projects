const display = document.querySelector('.display');
const operator = document.querySelectorAll('.operator');
const numbers = document.querySelectorAll('.number');
const deleteButton = document.querySelector('.delete');
const allClear = document.querySelector('.all-clear');
const equals = document.querySelector('.equals');

let evalString = '';
display.innerText = 0;


// delete btn event listener
deleteButton.addEventListener('click', () => {
    evalString = evalString.slice(0, -1);
    if(display.innerText.length === 1) {
        display.innerText = '0';
    } else {
        display.innerText = display.innerText.slice(0, -1);
    }
});


// sqrt function
function squareRoot(result) {
    return Math.sqrt(result);
}

// append number to display
numbers.forEach(num => {
    num.addEventListener('click', () => {
        if(display.innerText === '0') {
            display.innerText = num.innerText;
        } else {
            display.innerText += num.innerText;
        }
        evalString += num.innerText;
    })
});

// append operator to display
operator.forEach(opp => {
    opp.addEventListener('click', () => {
        const lastElementEntered = display.innerText.slice(-1);

        const operators = ['√','+','x','-','.', '÷'];
        let operatorBefore = false; // returns true if last thing on display is an operator
        // checks if back to back operators are selected
        for(let i = 0; i < 6; i++) {
            if(lastElementEntered === operators[i]) {
                operatorBefore = true;
            }
        }

        // no opertor before and operator cannot be first input
        if(operatorBefore === false && display.innerText !== '0') {
            display.innerText += opp.innerText;

            // append correct symbol to evalString and squareRoot func
            switch(opp.innerText) {
                case '√':
                    let evaluatedResult = compute();
                    let ans = squareRoot(evaluatedResult);
                    display.innerText = '';
                    evalString = ans;
                    display.innerText += ans;
                    break;
                case 'x':
                    evalString += '*';
                    break;
                case '÷':
                    evalString  += '/';
                    break;
                default:
                    evalString += opp.innerText
            }
        } else {
            alert("Invalid! Enter number");
        }
    })
});

// compute function
function compute() {
    let result = eval(evalString);
    allClearFunc();
    evalString += result;
    display.innerText = result;
    return result;
}

// all clear function
function allClearFunc() {
    display.innerText = '0';
    evalString = '';
}

// clear btn event listener
allClear.addEventListener('click', allClearFunc);
// equals btn event listener
equals.addEventListener('click', compute);
