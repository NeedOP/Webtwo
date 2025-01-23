document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  hamburger.addEventListener('click', function () {
    navMenu.classList.toggle('active');
  });
});


// Filtreringsfunktion för teknikartiklar
document.getElementById('filter').addEventListener('change', function () {
  const value = this.value;
  const articles = document.querySelectorAll('.tech-articles article');
  articles.forEach(article => {
    if (value === 'all' || article.dataset.category === value) {
      article.style.display = 'block';
    } else {
      article.style.display = 'none';
    }
  });
});
