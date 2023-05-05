const form = document.querySelector("#form");
const username = document.querySelector("#Username");
const email = document.querySelector("#Email");
const password = document.querySelector("#password");
const cpassword = document.querySelector("#cpassword");

form.addEventListener("submit", (e) => {
 
  if (!validateInputs()){
    e.preventDefault();
  }
});
validateInputs = () => {
  const usernameVal = username.value.trim();
  const emailVal = email.value.trim();
  const passwordval = password.value.trim();
  const cpasswordVal = cpassword.value.trim();
  let success = true;
  if (usernameVal === "") {
    success = false
    setError(username, "Username is required")
  } else {
    setSuccess(username);
  }
  if (emailVal === "") {
    success = false;
    setError(email, "Email is required");
  } else if (!validateEmail(emailVal))
    setError(email, "Please enter Valid Email")
  else {
    setSuccess(email);
  }
  if (passwordval.length < 8) {
    success = false;
    setError(password, "password must altleast 8 characters ")
  } else {
    setSuccess(password);
  }
  if (cpasswordVal === "") {
    success = false;
    setError(cpassword, "passowrd is required");
  } else if (cpasswordVal !== passwordval) {
    success = false;
    setError(cpassword, "password does not match");
  } else {
    setSuccess(cpassword);
  }
};

setError = (element, message) => {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector(".error");
  errorElement.innerText = message;
  inputGroup.classList.add("error");
  inputGroup.classList.remove("success");
};
setSuccess = (element) => {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector(".error");
  errorElement.innerText = "";
  inputGroup.classList.add("success");
  inputGroup.classList.remove("error");
};
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
