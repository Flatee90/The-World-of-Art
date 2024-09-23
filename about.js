console.log("hello from console log");

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


savebutton.addEventListener("click", handleSavejoinus);

function renderNavinfo() {
let userNameNavItem = document.getElementById("user-name");
let emailNavItem = document.getElementById("user-email");

let myEmail = localStorage.getItem("email");
let myName = localStorage.getItem("fullName");
console.log(myName, myEmail);

userNameNavItem.innerHTML = myName;
emailNavItem.innerHTML = myEmail;
}

renderNavinfo();