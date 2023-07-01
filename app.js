document.addEventListener("DOMContentLoaded", function(){
  let search = document.querySelector('search');
  let submit = document.getElementById('submit');

    document.querySelector('#submit').disabled = true;
    
    document.querySelector('#search').onkeyup = () => {
      if(document.querySelector('#search').value.length == 0){
        //if nothing is typed, disable the search button
        document.querySelector('#submit').disabled = true; 
      }
      else{
        document.querySelector('#submit').disabled = false;
      }
    }
  
  
  });
  
  
  /*const searchForm = document.getElementById('searchForm');
  const searchInput = document.getElementById('searchbar');
  
  
  searchForm.addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    const searchQuery = searchInput.value;
  
    window.location.href = `searchResults.html?query=${searchQuery}`;
  });
  */
  