function isValidFullName(name) {
  return /^[a-zA-Z]+ [a-zA-Z]+[a-zA-Z ]*$/.test(name);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

document
  .getElementById("rsvpForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Submit");

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const dietary = document.getElementById("dietary").value.trim();

    if (
      name === "Name" ||
      email === "Email" ||
      message === "Message" ||
      dietary === "Please list any dietary restrictions"
    ) {
      alert("Please fill out all fields.");
      return;
    }

    if (!isValidFullName(name)) {
      alert("Please enter your full name (first and last).");
      return;
    }

    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    alert("Form submitted successfully!");
    this.submit();
  });
