
const form = document.getElementById("demo-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const reveal = document.getElementById("reveal");
const reset = document.getElementById("reset");

const eventList = document.getElementById("event-list");
const attemptCount = document.getElementById("attempt-count");
const emptyMessage = document.getElementById("empty-message");
const clearEvents = document.getElementById("clear-events");

// Events contain no passwords and stay in this browser tab.
let demoEvents = [];

function renderDashboard() {
  attemptCount.textContent = demoEvents.length;
  eventList.replaceChildren();
  emptyMessage.hidden = demoEvents.length > 0;

  demoEvents.slice().reverse().forEach((item) => {
    const row = document.createElement("tr");

    [item.email, "NOT STORED", item.result, item.time].forEach((value) => {
      const cell = document.createElement("td");
      cell.textContent = value;
      row.appendChild(cell);
    });

    eventList.appendChild(row);
  });
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = emailInput.value.trim().toLowerCase();
  const password = passwordInput.value;

  // Only the published dummy credentials are accepted.
  const allowedEmails = [
    "learner@example.com",
    "training.user@example.com",
    "visitor@example.com"
  ];

  if (!allowedEmails.includes(email) || password !== "DEMO123") {
    alert(
      "Simulation only. Use a listed demo email and password DEMO123. " +
      "Do not enter real account details."
    );

    form.reset();
    return;
  }

  // Never save, display, or transmit the password.
  demoEvents.push({
    email: email,
    result: "Demo attempt",
    time: new Date().toLocaleTimeString()
  });

  form.reset();
  reveal.hidden = false;
  renderDashboard();

  reveal.scrollIntoView({ behavior: "smooth", block: "center" });
});

reset.addEventListener("click", function () {
  reveal.hidden = true;
  form.reset();
});

clearEvents.addEventListener("click", function () {
  demoEvents = [];
  renderDashboard();
});

renderDashboard();
