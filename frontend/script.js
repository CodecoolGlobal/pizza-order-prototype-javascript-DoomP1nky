console.log("Ez a srcipt file!")

const root = document.getElementById('root');
const womenButton = document.createElement('button');
womenButton.textContent = "WOMEN'S";
root.appendChild(womenButton);

const menButton = document.createElement('button');
menButton.textContent = "MEN'S";
root.appendChild(menButton);

// const selectSize = document.createElement()
let shoeCount = 0;
function shoeComponent(shoe) {
    shoeCount++;
    return `
    <br>
    <div id=contID${shoeCount}>
        <img id=imgID${shoeCount} src=${shoe.src} width=200 height=200>
        <div>${shoe.name}</div>
        <div>${shoe.price} Ft</div>
    </div>
    `
}
async function initializePage() {
    const response = await fetch(`http://127.0.0.1:9000/api/shoes`);
    const theShoes = await response.json();
    console.log(theShoes)

    const htmlShoes = theShoes.shoes.map(shoe => shoeComponent(shoe))
    const joinedStrings = htmlShoes.join("");
    // const root = document.getElementById('root');
    root.insertAdjacentHTML('beforeend', joinedStrings)

    womenButton.addEventListener("click", function () {
        console.log(theShoes.shoes.filter(shoe => shoe.gender === "woman"))
    })

    menButton.addEventListener("click", function () {
        console.log(theShoes.shoes.filter(shoe => shoe.gender === "man"))
    })


}
initializePage();

