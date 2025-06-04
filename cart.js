const emptyCart = []
const smCart = [{ name: "Chair", price: 300 }];
const cart = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Headphones", price: 200 }
];

function calculateTotal(cartItems) {
  let total = 0;
  for (let i = 0; i < cartItems.length; i++) {
    total += cartItems[i].price; // changed <= to <
  }
  return total;
}

console.log(calculateTotal(emptyCart));// check that an empty array returns 0
console.log(calculateTotal(smCart)); // check that it works for a small cart


function applyDiscount(total, discountRate) {
  if (discountRate <= 0 || discountRate >= 1) { // added a conditional to check for it being a valid discount rate and returned an error message if not.
    return 'Please select a discount rate precentage between 0 and less than 1'
  }
  return total - total * discountRate;
}

// console.log(applyDiscount(1000,1))

function generateReceipt(cartItems, total) {
  let receipt = "Items:\n"; // added conditional to check that total given is a number
  cartItems.forEach(item => {
    receipt += `${item.name}: $${item.price}\n`;
  });
  if (typeof total === "number") {
    receipt += `Total:\n $${total.toFixed(2)}`;
    return receipt;
  }
 else {
  return 'Please input a number';// returns an error if number not given.
}
}
// Debugging entry point
console.log("Starting shopping cart calculation...");
const totalPrice = calculateTotal(cart);
console.log(totalPrice)
const discountedTotal = applyDiscount(totalPrice, 0.2);
console.log(discountedTotal); // 20% discount
const receipt = generateReceipt(cart, discountedTotal);

document.getElementById("total").textContent = `Total: $${discountedTotal}`;
document.getElementById("receipt").textContent = receipt;

//I used the console in dev tools to help guide me when I made mistakes. I used breakpoints to help me figure out what is happening at that moment. I used sources to follow along with my code as I was looking at the web html version