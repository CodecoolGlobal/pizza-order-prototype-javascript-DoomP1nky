console.log("Ez a srcipt file!")

const root = document.getElementById('root');
const button = document.createElement('button');
button.textContent = "women";
root.appendChild(button);



function shoeComponent(shoe) {
    return `<div>${shoe.name}<div>${shoe.price} Ft</div></div>`
}
async function initializePage() {
    const response = await fetch(`http://127.0.0.1:9000/api/shoes`);
    const theShoes = await response.json();
    console.log(theShoes)

    const htmlShoes = theShoes.shoes.map(shoe => shoeComponent(shoe))
    const joinedStrings = htmlShoes.join("");
    const root = document.getElementById('root');
    root.insertAdjacentHTML('beforeend', joinedStrings)

    button.addEventListener("click", () => {        
        return theShoes.shoes.filter(shoe => shoe.gender === "woman")
    })
}
initializePage();

