const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;

  // Verificare daca toate campurile sunt completate cu caractere.

  if (emailInput.value === "" || passwordInput.value === "") {
    alert("Este necesara completare tuturor campurilor.");
  } else {
    console.log(`Email: ${emailInput.value}, Password: ${passwordInput.value}`);
    loginForm.reset();
  }
});
