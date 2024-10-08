const btn00 = document.getElementById('btn00');
const btn0 = document.getElementById('btn0');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const btn7 = document.getElementById('btn7');
const btn8 = document.getElementById('btn8');
const btn9 = document.getElementById('btn9');

const btnAdd = document.getElementById('btnAdd');
const btnSub = document.getElementById('btnSub');
const btnMul = document.getElementById('btnMul');
const btnDiv = document.getElementById('btnDiv');

const btnDot = document.getElementById('btnDot');
const btnC = document.getElementById('btnC');
const del = document.getElementById('del');
const equal = document.getElementById('equal');

const display = document.getElementById('display');

const numberButtons = [btn00, btn0, btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9];
const operatorButtons = [btnAdd, btnSub, btnMul, btnDiv];
let currentNumber = '';
let num1 = null;
let operator = null;
let inResultMode = false;



numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (inResultMode) {
      currentNumber = '';
      display.textContent = '';
      inResultMode = false;
    }

    if (currentNumber.length < 12) {
      currentNumber += button.textContent;
      display.textContent = currentNumber;
    }
  });
});




btnDot.addEventListener('click', () => {
  if (!currentNumber.includes('.')) {
    if (currentNumber.length < 12) { 
      currentNumber += '.';
      display.textContent = currentNumber;
    }
  }
});



operatorButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (num1!== null && operator!== null) {
      const num2 = parseFloat(currentNumber);
      let result;

      switch (operator) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        case '/':
          if (num2 === 0) {
            result = 'Error: Division by zero';
          } else {
            result = num1 / num2;
          }
          break;
        default:
          result = 'Error: Invalid operator';
      }

      currentNumber = formatResult(result);
      display.textContent = currentNumber;

      num1 = result;
      operator = button.textContent;
      inResultMode = true;
    } else {
      num1 = parseFloat(currentNumber);
      operator = button.textContent;
      currentNumber = '';
      display.textContent = '';
    }
  });
});



del.addEventListener('click', () => {
  if (!inResultMode && currentNumber!== '') {
    currentNumber = currentNumber.slice(0, -1);
    display.textContent = currentNumber;
  }
});


btnC.addEventListener('click', () => {
  currentNumber = '';
  num1 = null;
  operator = null;
  display.textContent = '';
});


equal.addEventListener('click', () => {
  if (num1!== null && operator!== null) {
    const num2 = parseFloat(currentNumber);
    let result;

    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        if (num2 === 0) {
          result = 'Error: Division by zero';
        } else {
          result = num1 / num2;
        }
        break;
      default:
        result = 'Error: Invalid operator';
    }

    currentNumber = formatResult(result);
    display.textContent = currentNumber;

    num1 = null;
    operator = null;
    inResultMode = true;
  }
});





function formatResult(result) {  
  let formattedResult = result.toString();  
  if (formattedResult.length > 12) {  
   formattedResult = formattedResult.substring(0, 12);  
  }  
  return formattedResult;  
}