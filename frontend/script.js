console.log("Ez a srcipt file!")

const root = document.getElementById('root');

// const selectSize = document.createElement()
let shoeCount = 0;
function shoeComponent(shoe) {
    shoeCount++;
    return `
    <div id=contID${shoeCount}>
        <img id=imgID${shoeCount} src=${shoe.src} width=300 height=300>
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


const header = document.createElement('div')
header.id = "header";
header.textContent = 'ShoeSzter';
//header.style.background = "frontend\pictures\header_pic_v2.jpg";
root.appendChild(header);

// Create an image element
let image = document.createElement("img");

// Set the source, alt, and id attributes of the image
image.src = "/pictures/header_pic.jpg";
image.alt = "Header picture";
image.id = "header-picture";

// Append the image to the header div
header.appendChild(image);

const contentDiv = document.createElement('div');
contentDiv.id = 'content-div';
root.appendChild(contentDiv);

const womenButton = document.createElement('button');
womenButton.textContent = "WOMEN'S";
womenButton.id = "woman-button";
root.appendChild(womenButton);

const menButton = document.createElement('button');
menButton.textContent = "MEN'S";
menButton.id = "men-button";
root.appendChild(menButton);

const cart = document.createElement('div');
cart.classList.add('shopping-cart');

const cartIcon = document.createElement('div');
cartIcon.classList.add('cart-icon');
cartIcon.innerHTML = '<i class="fa-regular fa-cart-shopping"></i>';

const cartCount = document.createElement('div');
cartCount.classList.add('cart-count');
cartCount.innerText = '0';


cart.appendChild(cartIcon);
cart.appendChild(cartCount);

root.appendChild(cart);

/* const footer = document.createElement('div')
footer.id = "footer";
footer.textContent = 'Contact';
//header.style.background = "frontend\pictures\header_pic_v2.jpg";
root.appendChild(footer); */