// ITERATION 1

function updateSubtotal(product) {
  // Steps 1 & 2
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  // Step 3
  const subtotal = price * quantity;
  // Step 4
  const subtotalElement = product.querySelector('.subtotal span');
  // Step 5
  subtotalElement.innerHTML = subtotal;
  return subtotal;
}

function calculateAll() {
  // ITERATION 2
  //... your code goes here
  const products = document.querySelectorAll('.product');
  let total = 0;
  products.forEach((product) => {
    total += updateSubtotal(product);
  });

  // ITERATION 3
  //... your code goes here
  const totalValue = document.querySelector('#total-value span');
  totalValue.innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
