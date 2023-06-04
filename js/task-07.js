const fontSize = document.getElementById("font-size-control");
const textSpan = document.getElementById("text");

fontSize.addEventListener("input", () => {
  const fontSize = fontSize.value + "px";
  textSpan.style.fontSize = fontSize;
});
