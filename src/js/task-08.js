
const formEl = document.querySelector(`.login-form`)

function submissionForm (event) {
    event.preventDefault();
    const {
        elements:{email,password}
    } = event.currentTarget;
if (email.value === ``|| password.value === ``) {
    return alert(`Всі поля мають бути заповнені`)
}
  let obj = {
    email: email.value,
    password: password.value
  }
console.log(obj);
  
event.currentTarget.reset();
};

formEl.addEventListener(`submit`,submissionForm);
