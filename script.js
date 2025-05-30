const newsletterCtaContainer = document.querySelector(
  ".newsletter-cta__container"
);
const newsletterSuccess = document.querySelector(
  ".newsletter__success-container"
);
const form = document.querySelector(".newsletter-cta__form");
const error = document.querySelector(".error");

const submittedEmail = document.querySelector(".email-text");
const input = document.getElementById("email");
const btnDismiss = document.querySelector(".btn__success");

function updateSuccessMessage(emailText) {
  submittedEmail.textContent = emailText;
  newsletterCtaContainer.classList.add("hidden");
  newsletterSuccess.classList.remove("hidden");
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let message = [];
  if (input.value === "" || input.value === null || input.invalid) {
    message.push("Valid email required");
  }

  if (message.length > 0) {
    // e.preventDefault();
    displayInvalid(e);
    error.innerHTML = message.join(", ");
  } else {
    const emailText = input.value;
    updateSuccessMessage(emailText);
  }
  setTimeout(() => {
    error.innerHTML = "";
  }, 4000);
  input.value = "";
});

btnDismiss.addEventListener("click", function () {
  newsletterCtaContainer.classList.remove("hidden");
  newsletterSuccess.classList.add("hidden");
});

input.addEventListener("invalid", displayInvalid);

function displayInvalid(e) {
  e.preventDefault();
  let message = [];
  message.push("Valid email required");
  error.innerHTML = message.join(", ");
  input.style.borderWidth = "2px";
  input.style.borderColor = "hsl(4, 100%, 67%)";
  input.style.color = "hsl(4, 100%, 67%)";
  input.style.backgroundColor = "hsl(4, 100%, 95%)";
  input.style.borderStyle = "solid";

  setTimeout(() => {
    error.innerHTML = "";
    input.value = "";
    input.style.borderWidth = "1px";

    input.style.borderColor = "hsl(0, 0%, 58%)";
    input.style.color = "hsl(234, 29%, 20%)";
    input.style.backgroundColor = "#fff";
    input.style.borderStyle = "solid";
  }, 4000);
}
