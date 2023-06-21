
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchbar');


searchForm.addEventListener('submit', function(event) {
  event.preventDefault(); 

  const searchQuery = searchInput.value;

  window.location.href = `searchResults.html?query=${searchQuery}`;
});
