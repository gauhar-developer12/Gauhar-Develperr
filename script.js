// 🛒 Empty cart array to store items
let cart = [];

// 🟢 Function to add items to the cart
function addToCart(itemName, itemPrice) {
  // Create an object for each item
  let item = { name: itemName, price: itemPrice };

  // Add item into the array
  cart.push(item);

  // Show the updated cart on screen
  showCart();
}

// 🟢 Function to display cart items
function showCart() {
  let cartList = document.getElementById("cartList");
  let total = 0;

  // Clear old cart display
  cartList.innerHTML = "";

  // Loop through all items
  cart.forEach((item) => {
    let li = document.createElement("li");
    li.textContent = item.name + " - $" + item.price;
    cartList.appendChild(li);
    total += item.price; // Add price to total
  });

  // Show total price
  document.getElementById("total").textContent = total;
}
