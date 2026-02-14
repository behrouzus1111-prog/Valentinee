const CORRECT_PASSWORD = "13751016";

const passwordInput = document.getElementById('passwordInput');
const nextButton = document.getElementById('nextButton');
const errorMessage = document.getElementById('errorMessage');

let timeoutId;

passwordInput.addEventListener('input', function () {

this.value = this.value.replace(/[^0-9]/g, '');

if (this.value.length === 8) {

if (this.value === CORRECT_PASSWORD) {

nextButton.classList.add('active');
nextButton.disabled = false;
errorMessage.classList.remove('show');

} else {

nextButton.classList.remove('active');
nextButton.disabled = true;
showErrorMessage();

}

} else {

nextButton.classList.remove('active');
nextButton.disabled = true;
errorMessage.classList.remove('show');

}

});

function showErrorMessage() {

errorMessage.classList.add('show');

clearTimeout(timeoutId);

timeoutId = setTimeout(() => {
errorMessage.classList.remove('show');
}, 3000);

}

nextButton.addEventListener('click', function () {

if (passwordInput.value === CORRECT_PASSWORD) {

window.location.href = "page2.html";

} else {

showErrorMessage();

}

});

passwordInput.addEventListener('focus', () => {
errorMessage.classList.remove('show');
});

passwordInput.addEventListener('keypress', function (e) {

if (e.key === 'Enter' && !nextButton.disabled) {

nextButton.click();

}

});
