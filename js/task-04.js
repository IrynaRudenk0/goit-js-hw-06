// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.


const counterValue = document.querySelector("value");
const decrementBtn = document.querySelector("dataset:decrement");
const incrementBtn = document.querySelector("dataset:increment");



const onClick = (a) => {
    value += a;
    return value;
    }


decrementBtn.addEventListener("click", (a) => {
    a = -1;

 })
 
 incrementBtn.addEventListener("click", (a) => {
    a = 1;

 })