  // Pobranie wszystkich elementów li.item
  const categories = document.querySelectorAll('#categories .item');

  // Licznik kategorii
  let categoryCount = 0;

  // Iteracja przez każdą kategorię
  categories.forEach(category => {
    // Inkrementacja licznika kategorii
    categoryCount++;

    // Pobranie nagłówka kategorii
    const categoryName = category.querySelector('h2').textContent;

    // Pobranie liczby elementów w kategorii
    const elementsCount = category.querySelectorAll('ul li').length;

    // Wyświetlenie nazwy kategorii i liczby elementów w konsoli
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${elementsCount}`);
  });

  // Wyświetlenie liczby kategorii w konsoli
  console.log(`Number of categories: ${categoryCount}`);