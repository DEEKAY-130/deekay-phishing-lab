
const form = document.getElementById("demo-form");
const reveal = document.getElementById("reveal");
const eventMessage = document.getElementById("event-message");
const resetButton = document.getElementById("reset-button");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("demo-email").value.trim();
  const password = document.getElementById("demo-password").value;

  // Accept only the fixed training credentials.
  if (email !== "learner@example.com" ||
      password !== "DEMO123") {
    alert("Training only: use learner@example.com and DEMO123.");
    form.reset();
    return;
  }

  // Never display, transmit, or store the entered password.
  form.reset();
  reveal.hidden = false;

  eventMessage.textContent =
    "A fictional training login was attempted. " +
    "No password was saved or sent. In a real phishing " +
    "attack, a malicious page might transmit credentials " +
    "to an attacker.";

  reveal.scrollIntoView({ behavior: "smooth", block: "start" });
});

resetButton.addEventListener("click", function () {
  form.reset();
  reveal.hidden = true;
  document.getElementById("demo-email").focus();
});
