const formEl = document.querySelector(`.login-form`)

function submissionForm (event) {
    event.preventDefault();
    const {
        elements:{email,password}
    } = event.currentTarget;
if (email.value===``|| password.value ===``) {
    return alert(`Всі поля мають бути заповнені`)
}
console.log(`Email: ${email.value} Password:${password.value} `);
event.currentTarget.reset();
};

formEl.addEventListener(`submit`,submissionForm);
