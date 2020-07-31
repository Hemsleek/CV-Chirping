/* setup and initialization */


/*selectors*/
const inputElement = document.getElementById('input-field');
const inputElement2 = document.getElementById('input-field2');
const labelElement = document.getElementById('label');
const labelElement2 = document.getElementById('label2');

/*utility functions*/


/*event listeners and triggers*/ 
inputElement.addEventListener('focus', e => {
    inputElement.classList.add('focus');
    labelElement.classList.add('caption');
})
inputElement2.addEventListener('focus', e => {
    inputElement2.classList.add('focus');
    labelElement2.classList.add('caption');
})
inputElement.addEventListener('focusout', e => {
    inputElement.classList.remove('focus');
    labelElement.classList.remove('caption');
})
inputElement2.addEventListener('focusout', e => {
    inputElement2.classList.remove('focus');
    labelElement2.classList.remove('caption');
})