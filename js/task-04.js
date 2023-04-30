const counterValue = document.querySelector('#value');
const decrementBtn = document.querySelector('dataset-decrement');
const incrementBtn = document.querySelector('dataset-increment');

const onClick = (value=0, a) => {
    value += a;
    counterValue = value;
}

decrementBtn.addEventListener('click', onClick(value, +1));
incrementBtn.addEventListener('click', onClick(value, -1));

