const cartProduct = document.getElementsByClassName("cart-product")[0];
const toggleImg = document.getElementById("toggleImg");
const title = '<div class="title">Added to cart</div>';
const products = `<div class="products"></div>`;
const purchase = `<div class="purchase">
    <p class="exceed"></p>
    <div class="infor">
        <button onclick="infor()">Purchase</button>
    </div>
</div>`;
const cartItems = [];

function hide() {
    cartProduct.style.display = "none";
}

function show() {
    cartProduct.style.display = "block";
}

function addToCart(imgURL, name, price) {
    // Hide img tag
    toggleImage();

    // Add HTML tags and products corresponding to the button clicked
    // Step 1: Add title, products, and purchase if they don't exist
    if (!cartProduct.classList.contains("title") &&
        !cartProduct.classList.contains("products") &&
        !cartProduct.classList.contains("purchase")) {
        cartProduct.innerHTML = title + products + purchase;
    }

    // Create a new product and append it to the products container
    const newProduct = createProductTag(imgURL, name, price);

    // Add product to the array
    cartItems.push(newProduct);

     // Display the first 5 products and update the exceed count
    updateProductsDisplay();
    updateExceedCount();
}

function infor() {
    let totalPrice = 0;
    for (let i = 0; i < cartItems.length; i++) {
        // Extract the price from the product HTML and sum them up
        const match = cartItems[i].match(/<p class="price">(\$\d+\.\d+)<\/p>/);
        if (match && match[1]) {
            totalPrice += parseFloat(match[1].substring(1));
        }
    }

    // Show the alert with the total price
    alert(`Total Price: $${totalPrice.toFixed(2)}`);
}

function updateExceedCount() {
    const exceedElement = cartProduct.querySelector('.exceed');
    const count = cartItems.length - 5;

    if (count > 0) {
        exceedElement.textContent = `And ${count} more products`;
    } else {
        exceedElement.textContent = ''; // Clear the exceed count if there are no exceeding products
    }
}

function updateProductsDisplay() {
    const productsElement = cartProduct.querySelector(".products");
    let currentProducts = '';
    const maxDisplay = Math.min(cartItems.length, 5);

    for (let i = 0; i < maxDisplay; i++) {
        currentProducts += cartItems[i];
    }

    productsElement.innerHTML = currentProducts;
}

function createProductTag(imgURL, name, price) {
    const product = ` <div class="product">
    <img src="${imgURL}" alt="">
    <p class="name">${name}</p>
    <p class="price">${price}</p>
</div>`;
    return product;
}

function toggleImage() {
    toggleImg.style.display = "none";
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

