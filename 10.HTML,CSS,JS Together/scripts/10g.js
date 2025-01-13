function toggleButton(selector){
    const button = document.querySelector(selector);
  
    if (!button.classList.contains('is-toggled')){ //if the button is not toggled
      turnOffPreviousButton();
      button.classList.add('is-toggled');
    } else{
      button.classList.remove('is-toggled');
    }
  }

  function turnOffPreviousButton(){
    const toggledButton = document.querySelector('.is-toggled');

    if (toggledButton){
      toggledButton.classList.remove('is-toggled');
    }
  }