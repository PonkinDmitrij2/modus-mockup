var searchBtn = document.querySelector('.search__btn');
var searchSorm = document.querySelector('.search__form');
var searchInput = searchSorm.querySelector('[name=search]');

searchBtn.addEventListener('click', function(event) {
  event.preventDefault();
  searchSorm.classList.toggle('search-form-show');
  searchInput.focus();
});

window.addEventListener('keydown', function(event) {
 if (event.keyCode === 27 || event.keyCode === 13) {
 if (searchSorm.classList.contains('search-form-show')) {
 searchSorm.classList.remove('search-form-show');
 }
 }
});