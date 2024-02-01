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

function alter(event, partName) {
    //declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    //Show the current tab, add "active" class to the link that opned the tab
    document.getElementById(partName).style.display = "block";
    event.currentTarget.className += " active";
}