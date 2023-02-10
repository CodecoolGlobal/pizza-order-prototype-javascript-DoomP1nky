const root = document.getElementById("root");
const header = document.createElement("div");

header.id = "header";
header.style.background = "frontend/pictures/header_pic_v2.jpg";
root.appendChild(header);

const headerText = document.createElement("div");
headerText.id = "header-text";
headerText.textContent = "ShoeSzter";
header.appendChild(headerText);
// Create an image element
let image = document.createElement("img");

// Set the source, alt, and id attributes of the image
image.src = "/pictures/header_pic.jpg";
image.alt = "Header picture";
image.id = "header-picture";

// Append the image to the header div
header.appendChild(image);

const contentDiv = document.createElement("div");
contentDiv.id = "content-div";
root.appendChild(contentDiv);

const womenButton = document.createElement("button");
womenButton.textContent = "WOMEN'S";
womenButton.id = "woman-button";
root.appendChild(womenButton);

const menButton = document.createElement("button");
menButton.textContent = "MEN'S";
menButton.id = "men-button";
root.appendChild(menButton);

const resetButton = document.createElement("button");
resetButton.textContent = "RESET";
resetButton.id = "reset-button";
root.appendChild(resetButton);

const cart = document.createElement("div");
cart.classList.add("shopping-cart");

const cartIcon = document.createElement("div");
cartIcon.classList.add("cart-icon");
cartIcon.innerHTML = '<i class="fa-regular fa-cart-shopping"></i>';

const cartCount = document.createElement("div");
cartCount.classList.add("cart-count");
cartCount.innerText = "0";
cart.appendChild(cartIcon);
cart.appendChild(cartCount);

const mainContainer = document.createElement("div");
mainContainer.id = "mainCont";
root.appendChild(mainContainer);

root.appendChild(cart);

let shoeCount = 0;

function shoeComponent(shoe) {
  shoeCount++;
  return `
    <div id="contID${shoeCount}">
        <img id="imgID${shoeCount}" src="${shoe.src}" width="300" height="300">
        <div>${shoe.name}</div>
        <div>${shoe.price} EUR</div>
        <label for="size-select">Choose size:</label>
        <select name="sizes" id="size-select-${shoeCount}"></select>
    </div>
    `;
}

function createOptions(arr) {
  for (let i = 0; i < arr.length; i++) {
    const currentButton = document.getElementById(`size-select-${i + 1}`);
    for (let j = 0; j < arr[i].size.length; j++) {
      const option = document.createElement("option");
      option.innerText = arr[i].size[j];
      option.value = arr[i].size[j];
      currentButton.appendChild(option);
    }
  }
}

function removeHideClass() {
  const shoeContainer = document.querySelectorAll(".hideshoes");
  shoeContainer.forEach((element) => {
    element.classList.remove("hideshoes");
  });
}

function genderFilter(gender, arr) {
  removeHideClass();
  let filteredIDs = [];
  const allDivs = document.querySelectorAll("div");
  const filteredShoes = arr
    .filter((shoe) => shoe.gender === gender)
    .map((shoe) => filteredIDs.push(shoe.id));
  for (let i = 0; i < filteredIDs.length; i++) {
    for (let j = 0; j < allDivs.length; j++) {
      if (allDivs[j].id.includes(`contID${filteredIDs[i]}`)) {
        allDivs[j].classList.add("hideshoes");
      }
    }
  }
}

async function initializePage() {
  const gender = ["woman", "man"];
  const response = await fetch(`/api/shoes`);
  const theShoes = await response.json();
  const shoesArray = theShoes.shoes;
  const htmlShoes = shoesArray.map((shoe) => shoeComponent(shoe)).join("");
  mainContainer.insertAdjacentHTML("beforeend", htmlShoes);
  createOptions(shoesArray);

  womenButton.addEventListener("click", () =>
    genderFilter(gender[1], shoesArray)
  );

  menButton.addEventListener("click", () =>
    genderFilter(gender[0], shoesArray)
  );

  resetButton.addEventListener("click", () => removeHideClass());
}

initializePage();

//Order

const post = () => {
  const date = new Date();
  fetch('/api/retek', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      date: {
        year: date.getFullYear(),
        month: date.getMonth(),
        day: date.getDate(),
        hour: date.getHours(),
        minute: date.getMinutes(),
      },
      costumer: {
        name: inputName.value,
        email: inputEmail.value,
      },
      address: {
        city: inputCity.value,
        street: inputStreet.value,
      },
    }),
  })
    .then((response) => response.json())
    .then((response) => console.log(response));
};

/* const footer = document.createElement('div')
footer.id = "footer";
footer.textContent = 'Contact';
//header.style.background = "frontend\pictures\header_pic_v2.jpg";
root.appendChild(footer); */
