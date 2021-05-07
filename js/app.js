const emailValue = document.querySelector("#email-text");
const emailValueTwo = document.querySelector("#email-text-two");
const btnCheck = document.querySelector("#btn-check");
const btnCheckTwo = document.querySelector("#btn-check-two");
const errorLabel = document.querySelector(".errorLabel");
const errorLabelTwo = document.querySelector(".errorLabelTwo");
const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

btnCheck.addEventListener("click", (e) => {
  if (emailValue.value.match(validRegex)) {
    errorLabel.innerText = "Valid Email Address";
    errorLabel.style.color = "green";
    emailValue.style.border = "1px solid hsla(97, 100%, 50%, 1)";
  } else {
    errorLabel.innerText = "Please check your email";
    errorLabel.style.fontWeight = "small";
    errorLabel.style.color = "hsl(0, 100%, 63%)";
    emailValue.style.border = "1px solid hsl(0, 100%, 63%)";
  }
});

btnCheckTwo.addEventListener("click", (e) => {
  if (emailValueTwo.value.match(validRegex)) {
    errorLabelTwo.innerText = "Valid Email Address";
    errorLabelTwo.style.color = "hsl(0, 0%, 100%)";
    emailValueTwo.style.border = "1px solid hsla(97, 100%, 50%, 1)";
  } else {
    errorLabelTwo.innerText = "Please check your email";
    errorLabelTwo.style.color = "hsl(0, 0%, 100%)";
    emailValueTwo.style.border = "1px solid hsl(0, 100%, 63%)";
  }
});
