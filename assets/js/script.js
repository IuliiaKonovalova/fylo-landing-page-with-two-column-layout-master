// Variables
const submissionFormSignUp = document.getElementById("form--signup");
const emailSignUp = document.getElementById("email--signup");
const submissionFormOffer = document.getElementById("form--offer");
const emailOffer = document.getElementById("email--offer");
let emailInputSignUp;
// let emailInputOffer = emailOffer.value;

// Main function on load
document.addEventListener("DOMContentLoaded", function () {

  submissionFormSignUp.addEventListener('submit', function (e) {
    emailInputSignUp = emailSignUp.value;
    submission(e, emailInputSignUp);
  });

  submissionFormOffer.addEventListener('submit', function (e) {
    submission(e, emailInputOffer);
  });

});


const submission = function (e, someValue) {
  e.preventDefault();
  console.log(someValue)
  if (!validateEmail(someValue)) {
    submissionFormSignUp.classList.add("error");
    submissionFormSignUp.classList.remove("success");
    console.log("Error")
  } else {
    someValue.value = "";
    submissionFormSignUp.classList.remove("error");
    submissionFormSignUp.classList.add("success");
    console.log("success")
  }
};

/**
 * Function to validate email input
 * Posted on Stack overflow:
 * https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
 */
const validateEmail = (someValue) => {
  return String(someValue)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};