const counterValue = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

const onClick = (value=0, a) => {
    value += a;
    counterValue = value;
}

decrementBtn.addEventListener('click', onClick(value, +1));
incrementBtn.addEventListener('click', onClick(value, -1));

