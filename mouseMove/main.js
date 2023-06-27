document.addEventListener("mousemove", movingMouse);

function movingMouse(e) {
  document.querySelector("h1").innerText = `
    Client X/Y: ${e.clientX}, ${e.clientY},
    Page X/Y: ${e.pageX}, ${e.pageY},
    Screen X/Y: ${e.screenX}, ${e.screenY}`;
    document.body.style.backgroundColor = `rgb(${e.clientX}, ${e.clientY}, 100)`;
}


