const cartProduct = document.getElementsByClassName("cart-product")[0];

function hide() {
    cartProduct.style.display = "none";
}

function show() {
    cartProduct.style.display = "block";
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}