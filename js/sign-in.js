const eyes = document.querySelector(".eyes");
const password = document.getElementById("password");

function swap() {

    event.preventDefault(); // Prevent the default behavior of the anchor element

    if (eyes.classList.contains("show-password")) {
        eyes.innerHTML = `<i class="fa-solid fa-eye"></i>`;
        password.type = "password";
        eyes.classList.remove("show-password");
    } else {
        eyes.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`;
        password.type = "text";
        eyes.classList.add("show-password");
    }
}
