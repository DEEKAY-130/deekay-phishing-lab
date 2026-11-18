const form = document.getElementById("loginForm");
const result = document.getElementById("result");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    result.innerHTML = `
        <div style="background:#fff3cd; padding:15px; margin-top:15px; border-radius:8px;">
            <h3>⚠️ PHISHING DETECTED!</h3>
            <p>This was an educational simulation.</p>
            <p>No passwords were collected or transmitted.</p>
            <p>Always verify a website's domain before logging in.</p>
        </div>
    `;

});