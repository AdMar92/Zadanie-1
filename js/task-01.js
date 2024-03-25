// Pobieranie wszystkich elementów li.item
const categories = document.querySelectorAll('#categories .item');

// Liczenie liczby kategorii
const numberOfCategories = categories.length;

// Wypisywanie liczby kategorii w konsoli
console.log('Number of categories:', numberOfCategories);

// Iteracja przez każdą kategorię
categories.forEach(category => {
  // Pobieranie nagłówka kategorii
  const categoryName = category.querySelector('h2').textContent;

  // Pobieranie liczby elementów w kategorii
  const categoryElements = category.querySelectorAll('ul li').length;

  // Wypisywanie nazwy kategorii i liczby elementów w konsoli
  console.log('Category:', categoryName);
  console.log('Elements:', categoryElements);
});