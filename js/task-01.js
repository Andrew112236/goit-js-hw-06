// Rreferința la lista ul#categories
const categoriesList = document.querySelector("#categories");

// Toate elementele li.item din lista
const categoryItems = categoriesList.querySelectorAll("li.item");
console.log(categoryItems);

// Numărul total de categorii
const total = categoryItems.length;
console.log("Numărul total de categorii:", total);

// Titlul și numărul de elemente
categoryItems.forEach((categoryItem) => {
  // Titlul categoriei (tag-ul h2)
  const categoryTitle = categoryItem.querySelector("h2").textContent;

  // Toate elementele li din categoria curentă
  const categoryElements = categoryItem.querySelectorAll("li");
  //console.log(categoryElements);

  // Elementele din categoria curentă
  const categoryElementCount = categoryElements.length;

  // Afișează titlul și numărul de elemente
  console.log("Categorie:", categoryTitle);
  console.log("Numărul de elemente:", categoryElementCount);
});
