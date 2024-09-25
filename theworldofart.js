console.log("hello from The World of art");

let fetchButton = document.getElementById("fetch-button");
let Objectnumber = document.getElementById("object-number");
let artOutput = document.getElementById("art-output");

async function handlefetchobject() {
    console.log("Welcome Art Lover!");
    let Objectnumber = objectInput.value;
    let url = `https://collectionapi.metmuseum.org/public/collection/v1/search/${Objectnumber}`;
    console.log(url);
    try {
        let result = await fetch(url);
        if (!result.ok) {
            throw new Error("failed to fetch data");
        }
        let data = await result.json();
        console.log(data);
    } catch (error) {
        artOutput.textContent = "Error fetchining data.";
        console.log(error);

    }

}




fetchButton.addEventListener("click", handlefetchobject);