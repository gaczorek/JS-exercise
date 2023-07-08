const square = document.querySelector('div');
let squareX = 150;
let squareY = 50;
square.style.left = `${squareX}px`;
square.style.top = `${squareY}px`;

let moveSquare = false;

let insertSquareX;
let insertSquareY;



square.addEventListener('mousedown',(e)=>{
    square.style.backgroundColor = "gray";
    moveSquare = !moveSquare;

    insertSquareX = e.offsetX;
    insertSquareY = e.offsetY;

    console.log(insertSquareX, insertSquareY)

})

square.addEventListener('mousemove',(e)=>{
    if(moveSquare){
    squareX = e.clientX - insertSquareX;
    squareY = e.clientY - insertSquareY;
    square.style.left = `${squareX}px`;
    square.style.top = `${squareY}px`;
    }
})

square.addEventListener('mouseup',()=>{
    square.style.backgroundColor = "black";
    moveSquare = !moveSquare
})