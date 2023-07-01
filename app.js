document.addEventListener("DOMContentLoaded", function(){
  let search = document.querySelector('#search');
  let submit = document.querySelector('#submit');

    document.querySelector('#submit').disabled = true;
    
    document.querySelector('#search').onkeyup = () => {
      if(document.querySelector('#search').value.length == 0){
        //if nothing is typed, disable the search button
        document.querySelector('#submit').disabled = true; 
    
        //remove the hoverbackground color
        document.querySelector('#submit').classList.remove('submit');

      }
      else{
        document.querySelector('#submit').disabled = false;

        //add hover effect
        document.querySelector('#submit').classList.add('submit');
       
      }
    }
  
  
  });
  
  
  
  