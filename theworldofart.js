console.log("hello from The World of art");

let fetchButton = document.getElementById("fetch-button");
let Objectnumber = document.getElementById("object-number");
let artOutput = document.getElementById("art-output");
let Idinput = document.getElementById("object-search");
console.log(Idinput);

async function handlefetchobject() {
    console.log("Welcome Art Lover!");
    let Objectnumber = Idinput.value;
    console.log("hello from objectnumber" , Objectnumber);

    let url = `https://api.artic.edu/api/v1/artworks/${Objectnumber}`;
    // let url = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${Objectnumber}`;
    // let url = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${Objectnumber}`;
    
    // let url = `https://pokeapi.co/api/v2/pokemon/25`
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