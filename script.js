function valideForm() {
  let estValide = true;
  const emailInput = document.getElementById("email");

  if (emailInput.value === "") {
    document.getElementById("error_message").innerHTML = "Valid Email Required";
    emailInput.nextElementSibling.style.display = "block";
    emailInput.style.border = "1px solid red";
    estValide = false;
  } else {
    emailInput.nextElementSibling.style.display = "none";
    emailInput.style.border = "1px solid black";
  }

  if (estValide) {
    const emailPlaceholder = document.getElementById("email_placeholder");
    emailPlaceholder.textContent = emailInput.value;
    document.getElementById("success_message").style.display = "block";
  }
}
