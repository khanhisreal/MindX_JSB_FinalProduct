const form = document.querySelector("form");
const button = document.querySelector("button");
const checkbox = document.getElementById("checkbox");

function check() {
    if (checkbox.checked === true) {
        button.style.cursor = "pointer";
        button.removeAttribute("disabled");
    } else {
        button.style.cursor = "no-drop";
        button.setAttribute("disabled", "");
    }
}

function redirect() {
    window.location.href = "sign-in.html";
}

// Add a submit event listener to the form
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission
});
