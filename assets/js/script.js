/* jshint esversion:8 */
// Variables
const submissionFormSignUp = document.getElementById("form--signup");
const emailSignUp = document.getElementById("email--signup");
const submissionFormOffer = document.getElementById("form--offer");
const emailOffer = document.getElementById("email--offer");
let emailInputSignUp;
let emailInputOffer;

// Main function on load
document.addEventListener("DOMContentLoaded", function () {

  submissionFormSignUp.addEventListener('submit', function (e) {
    emailInputSignUp = emailSignUp.value;
    submission(e, emailInputSignUp);
  });

  submissionFormOffer.addEventListener('submit', function (e) {
    let emailInputOffer = emailOffer.value;
    submission(e, emailInputOffer);
  });
});


const submission = function (e, someValue) {
  e.preventDefault();
  if (!validateEmail(someValue)) {
    emailErrorInput();
  } else {
    emailSuccessInput();

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


/**
 * Check which form was used,
 * Displays error message
 */
const emailErrorInput = function () {
  if (emailSignUp.value !== "") {
    submissionFormSignUp.classList.add("error");
    submissionFormSignUp.classList.remove("success");
    emailSignUp.value = "";
  } else {
    submissionFormOffer.classList.add("error");
    submissionFormOffer.classList.remove("success");
    emailOffer.value = "";
  }
};


/**
 * Check which form was used,
 * Displays success message
 */
const emailSuccessInput = function () {
  if (emailSignUp.value !== "") {
    emailSignUp.value = "";
    submissionFormSignUp.classList.remove("error");
    submissionFormSignUp.classList.add("success");
  } else {
    emailOffer.value = "";
    submissionFormOffer.classList.remove("error");
    submissionFormOffer.classList.add("success");
  }
};