const counterValue = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

let counterValue = 0;

const increment = (event) => {
  counterValue += 1;

  counterValue.textContent = counterValue;
};

const decrement = (event) => {
  counterValue -= 1;

  counterValue.textContent = counterValue;
};

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);


