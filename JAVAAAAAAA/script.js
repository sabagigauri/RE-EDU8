const email = document.querySelector('#Third');
const pass = document.querySelector('#Fourth');
const submit = document.querySelector('.second-btn');

const validateEmail = () => {
    const val = email.value;
    if ((val.length < 3) || (val.length > 10)) {
        email.style.borderColor = 'red';
    } 
    else {
        email.style.borderColor = 'green';
    }
}

submit.addEventListener('click', () => {
    validateEmail();
})