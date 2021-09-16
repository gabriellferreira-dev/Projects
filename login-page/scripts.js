const inputEmail = document.querySelector('#user-email');
const inputPassword = document.querySelector('#user-password');
const errorMessage = document.querySelector('#error-message');

const validEmailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const setErrorMessage = () => {
  const invalidEmail = !!inputEmail.classList.contains('invalid');
  const invalidPassword = !!inputPassword.classList.contains('invalid');

  switch (true) {
    case invalidEmail && invalidPassword:
      errorMessage.innerHTML = 'E-mail e Senha inválidos';
      errorMessage.style.opacity = 1;
      break;
    case invalidEmail:
      errorMessage.innerHTML = 'E-mail inválido';
      errorMessage.style.opacity = 1;
      break;
    case invalidPassword:
      errorMessage.innerHTML = 'Senha inválida';
      errorMessage.style.opacity = 1;
      break;
    default:
      errorMessage.innerHTML = '';
      break;
  }
};

const validateEmail = ({ target: { value } }) => {
  const isValidEmail = validEmailRegex.test(value);

  if (!value || isValidEmail) {
    inputEmail.classList.remove('invalid');
    return;
  }
  if (!isValidEmail) {
    inputEmail.classList.add('invalid');
  }
};

const validatePassword = ({ target: { value } }) => {
  const isValidPassword = value.length >= 6;

  if (!value || isValidPassword) {
    inputPassword.classList.remove('invalid');
    return;
  }
  if (!isValidPassword) {
    inputPassword.classList.add('invalid');
  }
};

inputEmail.addEventListener('input', validateEmail);
inputPassword.addEventListener('input', validatePassword);
document.addEventListener('input', setErrorMessage);
