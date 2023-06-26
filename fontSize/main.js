const btn = document.querySelector("button");
const listItem = document.querySelectorAll("li");
let fontSize = 10;

// const displayBlock = () => listItem.forEach((item) => item.style="display:block; font-size:"+ fontSize + "px")






btn.addEventListener("click", () => {
    for (let i =0; i < listItem.length; i++){
        if(listItem[i].style.display === ""){listItem[i].style.display = "block"};
        listItem[i].style.fontSize = `${fontSize}px`;
    }
    fontSize++
}

);
