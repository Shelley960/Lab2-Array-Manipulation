let shoppingList = []; // this is our empty array for the items

// Caching items from the HTML
let itemInput = document.getElementById("itemInput");
let addItemButton = document.getElementById("addItemButton");
let removeItemButton = document.getElementById("removeItemButton");
let displayList = document.getElementById("shoppingList");

let searchItem = document.getElementById("searchItem");
let searchList = document.getElementById("search");
let searchItemButton = document.getElementById("searchItemButton");

// Our button fuctionalities
 
addItemButton.addEventListener("click", function () {
  let item = itemInput.value;
 
  if (item === "") {
    alert("Please enter an item.");
    return;
  } else if (shoppingList.includes(item)) {
    alert("Item is in the shopping list.");
    return;
  } else {
 
  shoppingList.push(item); // Add item to cart array
  rendershoppingList();
  itemInput.value = ""; // Clear the input field
}});
 
removeItemButton.addEventListener("click", function () {

    // if the cart is empty, send an alert
    if (shoppingList.length === 0){
        alert("Cart is empty. No items to remove");
        return;
    };


  shoppingList.pop(); // Remove last item from cart array
  rendershoppingList();
});

 // This function recreates the "shopping cart" every time an item is added or removed
function rendershoppingList() {
  displayList.innerHTML = ""; // Clear existing list
  for (let i = 0; i < shoppingList.length; i++) {
    let listItem = document.createElement("li");
    listItem.innerText = shoppingList[i];
    displayList.appendChild(listItem);
  }
}

searchItemButton.addEventListener("click", function () {
  
  searchList.innerHTML = ""; // Clear existing list
  let itemSearch = searchItem.value;

    // if the cart is empty, send an alert
    if (itemSearch === "") {
      alert("Please enter the search item.");
    return;
  } else {
    let result = shoppingList.map((item) => item.toLowerCase()).indexOf(itemSearch.toLowerCase());
      result.forEach(match => {
        let itemli = document.createElement("li");
        itemli.innerTest = match;
        result.appendChild(itemli);
        itemSearch.value = ""; // Clear the input field
      });
    }

  }
);
