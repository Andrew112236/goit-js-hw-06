const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", () => {
  // utilizarea metodei trim pentru eliminarea spatiilor de la inceputul si sfarsitul sirului
  const inputValue = nameInput.value.trim();

  // Verificare input utilizator

  if (inputValue !== "") {
    nameOutput.textContent = inputValue;
  } else {
    nameOutput.textContent = "Anonymous";
  }
});
