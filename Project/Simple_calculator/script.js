const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let current = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'C') {
      current = '';
      display.textContent = '0';
    } else if (value === '=') {
      try {
        let expression = current.replace(/×/g, '*').replace(/÷/g, '/');
        current = eval(expression).toString();
        display.textContent = current;
      } catch {
        display.textContent = 'Error';
        current = '';
      }
    } else {
      current += value;
      display.textContent = current;
    }
  });
});