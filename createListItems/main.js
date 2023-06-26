let size = 10;
let orderElement = 1;

const init = () => {
const btnStart = document.createElement("button");
btnStart.textContent="dodaj 10 elementów"
document.body.appendChild(btnStart);

const btnClear = document.createElement("button");
btnClear.textContent="wyczyść";
document.body.appendChild(btnClear);

const list = document.createElement("ul");
document.body.appendChild(list)
list.style.listStyle="none"


btnStart.addEventListener("click", createLiElements)

btnClear.addEventListener("click", function(){
list.replaceChildren();
size = 10;
orderElement = 1;

})
}

const createLiElements = () => {

const list = document.querySelector("ul");


for( let i = 1; i <=10 ; i++){
const listItems = document.createElement("li");
list.appendChild(listItems);
listItems.style.fontSize=`${size++}px`
listItems.textContent=`Element nr ${orderElement}`;
orderElement++
}
}

init()