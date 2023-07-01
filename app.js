document.addEventListener("DOMContentLoaded", function(){
  let search = document.querySelector('#search');
  let submit = document.querySelector('#submit');

    submit.disabled = true;
    
    search.onkeyup = () => {
      if(search.value.length == 0){
        //if nothing is typed, disable the search button
        submit.disabled = true; 

      }
      else{
        submit.disabled = false;
       
      }
    }
  
  
  });
  
  
  
  