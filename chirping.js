/* setup and initialization */


/*selectors*/
const inputElement = document.getElementById('input-field');
const inputElement2 = document.getElementById('input-field2');
const labelElement = document.getElementById('label');
const labelElement2 = document.getElementById('label2');
const formElement = document.getElementById("form-element")

/*utility functions*/


/*event listeners and triggers*/
formElement.addEventListener('focus', e => {
        e.preventDefault();
        if (e.target.dataset.select) {

            if (e.target.dataset.select == "input1") {

                // e.target.classList.add('focus');
                console.log('input');
                labelElement.classList.add('caption');

            } else if (e.target.dataset.select == "input2") {
                // e.target.classList.add('focus');
                console.log('input23');

                labelElement2.classList.remove('caption');

            }
        } else {
            return;
        }

        // inputElement.classList.add('focus');
        // labelElement.classList.add('caption');
    })
    // inputElement2.addEventListener('focus', e => {})
    // inputElement.addEventListener('focusout', e => {})
inputElement2.addEventListener('focusout', e => {
    inputElement2.classList.remove('focus');
    labelElement2.classList.remove('caption');
})