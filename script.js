function operate(num1, operator, num2) {
  if (operator == '+') {
    return parseFloat(num1) + parseFloat(num2);
  }
  else if (operator == '-') {
    return num1 - num2;
  }
  else if (operator == '*') {
    return num1 * num2;
  }
  else if (operator == '/') {
    return num1 / num2;
  }
  else {
    console.log('Not a valid operator');
  }
}

const display = document.querySelector('.display');
const history = document.querySelector('.history');
const btn = document.querySelectorAll('button');

let arr1 = [];
let arr2 = [];
let arr3 = [];

let op = '';
let result = '';

btn.forEach((button) => {
  button.addEventListener('click', () => {
    // if clear button is clicked call clear function to reset everything to default value
    if (button.id == 'clear') {
      clear();
    }
    // else if button is "="
    else if (button.id == '=') {
      // check if "=" has been clicked before by checking if there was a previous result
      if (result != '') {
        result = operate(result, op, arr2.join(''))
        display.textContent = result;
        op = '';
        arr2 = [];
      }
      // else its first time running
      else {
        history.textContent = `${arr1.join('')} ${op} ${arr2.join('')} ${button.id}`;
        arr3 = [arr1.join(''), arr2.join('')];
        result = operate(arr3[0], op, arr3[1]);
        display.textContent = result;

        op = '';
        arr2 = [];
      }
      
    }
    // else if button was a operator
    else if (button.id == '*' || button.id == '/' || button.id == '+' || button.id == '-') {
      op = button.id
    }
    // else check if operator was already declared
    else {
      // if operator was declared
      if (op == '*' || op == '/' || op == '+' || op == '-') {
        console.log(op);
        arr2.push(button.id);
        history.textContent = `${arr1.join('')} ${op}`;
        display.textContent = arr2.join('');
      }
      // else operator wasnt declared and its first time running
      else {
        arr1.push(button.id);
        display.textContent = arr1.join('');
      }

      
    }



  });
});

// reset every value to default
function clear() {
  arr1 = [];
  arr2 = [];
  arr3 = [];
  result = '';
  op = '';
  display.textContent = '';
  history.textContent = '';
}