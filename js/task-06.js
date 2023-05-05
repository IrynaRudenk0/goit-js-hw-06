// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur),
//     перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.

const input = document.querySelector('#validation-input');
const length = Number(input.dataset.length);
    
input.addEventListener("blur", (event) => { 
    input.classList.add('invalid');
   if (event.currentTarget.value.length === length) {
      input.classList.replace('invalid', 'valid')
   }   
});
  