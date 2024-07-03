
document.addEventListener('DOMContentLoaded', function () {
  
  var selectElement = document.getElementById('sizeSelect');
  var pricetextElement = document.getElementById('pricetext');

  selectElement.addEventListener('change', function () {
    var selectedValue = selectElement.value;

    switch (selectedValue) {
      case 'op1':
        pricetextElement.textContent = '$20.00'; 
        break;
      case 'op2':
        pricetextElement.textContent = '$30.00'; 
        break;
      case 'op3':
        pricetextElement.textContent = '$38.00';
        break;
      case 'op4':
        pricetextElement.textContent = '$45.00'; 
        break;
      default:
        pricetextElement.textContent = '$00.00'; 
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
    var buyNowBtn = document.getElementById('buyNowBtn');

    buyNowBtn.addEventListener('click', function () {
    
      var isClosed = true; // if store is open, make it true

      if (isClosed) {
        
        alert("Store is currently closed. Please try again later.");
      } else {
        
        alert("Store is open. Proceeding with the purchase!");
      
      }
    });
  });