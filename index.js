var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var newItem = {};
 newItem[item] = Math.floor(Math.random() * Math.floor(100));
 console.log(`${item} has been added to your cart.`);
 cart.push(newItem);
 return cart;
}

function viewCart() {
  // write your code here
  var cartArray = [];
  var cartContents = 'In your cart, you have ';
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.');
  } else {
    for (var i = 0; i < cart.length; i++) {
      cartArray.push(`${Object.keys(cart[0])} at $${Object.values(cart[0])}`);
    }
  }
  if (cart.length <= 2) {
    console.log(`${cartContents}${cartArray.join(' and ')}.`);
  } else {
    cartContents += `${cartArray.slice(0,cart.length -1).join(', ')}, and ${cartArray[cart.length-1]}.`); 
  }
  
  cartContents += '.';
  return cartContents;
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
