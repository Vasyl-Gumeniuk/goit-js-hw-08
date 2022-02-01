import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const inputRefs = {
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
}
const FORM_CURRENT_VALUE = "feedback-form-state";


form.addEventListener('submit', cleanSubmitForm);
form.addEventListener('input', throttle(inputData, 500));


checkSubmitForm();

function cleanSubmitForm(e) {
    e.preventDefault();
    const savedData = localStorage.getItem(FORM_CURRENT_VALUE);
    const parsedSavedData = JSON.parse(savedData);
    console.log(parsedSavedData);

    e.currentTarget.reset();
    localStorage.removeItem(FORM_CURRENT_VALUE);
}

function inputData(e) {
    const userData = {
    email: inputRefs.input.value,
    message: inputRefs.textarea.value,
    };
    
    localStorage.setItem(FORM_CURRENT_VALUE, JSON.stringify(userData));
}

function checkSubmitForm(e) {
    const savedData = localStorage.getItem(FORM_CURRENT_VALUE);
    const parsedSavedData = JSON.parse(savedData);

    if (savedData) {
        inputRefs.input.value = parsedSavedData.email || "";
        inputRefs.textarea.value = parsedSavedData.message || "";
    }
}