
// const header = document.createElement('div')
// header.id = "header";
// header.textContent = 'ShoeSzter';
// //header.style.background = "frontend\pictures\header_pic_v2.jpg";
// root.appendChild(header)
const root = document.getElementById('root');

let shoeCount = 0;

const womenButton = document.createElement('button');
womenButton.textContent = "WOMEN'S";
root.appendChild(womenButton);

const menButton = document.createElement('button');
menButton.textContent = "MEN'S";
root.appendChild(menButton);

const resetButton = document.createElement('button');
resetButton.textContent = "RESET";
root.appendChild(resetButton);

const mainContainer = document.createElement('div');
mainContainer.id = 'mainCont';
root.appendChild(mainContainer);


function shoeComponent(shoe) {
    shoeCount++;
    return `
    <br>
    <div id=contID${shoeCount}>
        <img id=imgID${shoeCount} src=${shoe.src} width=200 height=200>
        <div>${shoe.name}</div>
        <div>${shoe.price} Ft</div>
        <label for="size-select">Válasszon méretet:</label>
        <select name="sizes" id="size-select-${shoeCount}"></select>
    </div>
    `
}
function createOptions(arr) {
    for (let i = 0; i < arr.length; i++) {
        const currentButton = document.getElementById(`size-select-${i + 1}`)
        for (let j = 0; j < arr[i].size.length; j++) {
            const option = document.createElement('option')
            option.innerText = arr[i].size[j];
            option.value = arr[i].size[j];
            currentButton.appendChild(option);
        }
    }
}
function removeHideClass() {
    const shoeContainer = document.querySelectorAll('.hideshoes');
    shoeContainer.forEach((element) => {
        element.classList.remove('hideshoes');
    });
}
function genderFilter(gender, arr) {
    removeHideClass();
    let filteredIDs = [];
    const allDivs = document.querySelectorAll('div');
    const filteredShoes = arr.filter(shoe => shoe.gender === gender).map(shoe => filteredIDs.push(shoe.id));
    for (let i = 0; i < filteredIDs.length; i++) {
        for (let j = 0; j < allDivs.length; j++) {
            if (allDivs[j].id.includes(`contID${filteredIDs[i]}`)) {
                allDivs[j].classList.add('hideshoes');
            }
        }
    }
}
async function initializePage() {
    const gender = ['woman', 'man'];
    const response = await fetch(`http://127.0.0.1:9000/api/shoes`);
    const theShoes = await response.json();
    const shoesArray = theShoes.shoes;
    const htmlShoes = shoesArray.map(shoe => shoeComponent(shoe)).join('')
    mainContainer.insertAdjacentHTML('beforeend', htmlShoes);
    createOptions(shoesArray);

    womenButton.addEventListener("click", () => genderFilter(gender[1], shoesArray));

    menButton.addEventListener("click", () => genderFilter(gender[0], shoesArray));

    resetButton.addEventListener("click", () => removeHideClass());
}

initializePage();



