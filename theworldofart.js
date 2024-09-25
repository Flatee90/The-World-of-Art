console.log("Hello from th world of art!");

let fetchButton = document.getElementById("fetch-button");
let Objectnumber = document.getElementById("object-number");

async function handlefetchobject() {
    console.log("Welcome Art Lover!");
    let Objectnumber = objectInput.value;
    let response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search`);
}




fetchButton.addEventListener("click", handlefetchobject);