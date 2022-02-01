import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const inputRefs = {
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
}
const FORM_CURRENT_VALUE = "feedback-form-state";
const userData = {};


form.addEventListener('submit', cleanSubmitForm);
form.addEventListener('input', throttle(inputData, 500));


checkSubmitForm();

function cleanSubmitForm(e) {
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem("FORM_CURRENT_VALUE");
    console.log(userData);
}

function inputData(e) {
    userData[e.target.name] = e.target.value;
    localStorage.setItem("FORM_CURRENT_VALUE", JSON.stringify(userData));
    console.log(userData);
}

function checkSubmitForm(e) {
    const savedData = localStorage.getItem("FORM_CURRENT_VALUE");
    const parsedSavedData = JSON.parse(savedData);

    if (savedData) {
        inputRefs.input.value = parsedSavedData.email;
        inputRefs.textarea.value = parsedSavedData.message;
    }
}






//         if (savedData) {
//             checkEmail();
//             checkMessage();
//         }
//     function checkEmail() {
//         if (parsedSavedData.email !== undefined) {
//             inputRefs.input.value = parsedSavedData.email;
//         } return
//     };

//     function checkMessage() {
//         if (parsedSavedData.message !== undefined) {
//             inputRefs.textarea.value = parsedSavedData.message;
//             } return
//     };
// };
