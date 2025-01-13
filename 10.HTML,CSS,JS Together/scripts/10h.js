function handleCostKeyDown(event){
  if (event.key === 'Enter'){
    calculateTotal();
  }
}

function calculateTotal(){
  const inputElement = document.querySelector('.js-cost-input');
  let cost = Number(inputElement.value);

  document.querySelector('.js-total-cost')
    .innerHTML = '';
  document.querySelector('.js-error-message')
    .innerHTML = '';
  
  if (cost < 0){
    document.querySelector('.js-error-message')
      .innerHTML = 'Error: cost cannot be less than $0'
      return;
  }

  if (cost < 40){
    cost += 10;
  }

  document.querySelector('.js-total-cost')
    .innerHTML = `$${cost}`;
}