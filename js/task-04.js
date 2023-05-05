let counter = document.querySelector('#value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

const increment = () => {
  counterValue += 1;

    counter.innerHTML = counterValue;
};

const decrement = () => {
  counterValue -= 1;

    counter.innerHTML = counterValue;
};

incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);
