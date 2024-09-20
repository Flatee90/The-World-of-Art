console.log("Hello from art lover info");

let emailInput = document.getElementById("email-input");
let fullNameInput = document.getElementById("full-Name-input");
let savebutton = document.getElementById("save-button");

console.log(emailInput);
console.log(fullNameInput);


function handleSavejoinus() {
    let fullName = fullNameInput.value;
    let email = emailInput.value;

    console.log(fullName, email);

    localStorage.setItem("fullName", fullName);
    localStorage.setItem("email", email);
}

function saveUserData() {
    let fullName = localStorage.getItem("")
}
savebutton.addEventListener("click", handleSavejoinus);

