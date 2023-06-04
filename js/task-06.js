const validationInput = document.getElementById("validation-input");

// Utilizarea evenimentului blur in eveniment

validationInput.addEventListener("blur", () => {
  const desiredLength = validationInput.getAttribute("data-length");
  const inputValue = validationInput.value.trim();

  // Conditia pentru numarul de caractere introduse

  if (inputValue.length === Number(desiredLength)) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
});
