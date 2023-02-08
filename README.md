No starter code is provided. Start from scratch! Do not scratch yourself or others!

let shoeCount = 0;
function shoeComponent(shoe) {
    shoeCount++;
    return `
    <img id=imgID${shoeCount} src="pictures/Adidas Retropy Adisuper W.jpg">
    <div>${shoe.name}</div>
    <div>${shoe.price} Ft</div>
    `