
let red = 100;
// let green = 100;
// let blue = 100;

document.body.style.backgroundColor = `rgb(${red}, ${red}, ${red})`;

const changeColor = (e) => {
  // console.log(e.keyCode, e.which);
  // 38 - strzałka do góry
  // 40 - strzalka w dół

  // wciśnięcie klawisza strzałki do góry ma zmieniać kolor (stopniowo) na biały czyli rgb(255,255,255). Wciśniecie klawisza strzałki w dół ma zmienić kolor stopniowo na czarny (docelowo rgb(0,0,0)) 
  //tutaj twój kod
  // wersja 1 - instrukcja if
  // wersja 2 - instrukcja switch


  // if(e.keyCode == 38 && red >=0){
   
  //   console.log(`wcisnieta strzalka go gory, ${red}`)
  //   red -=10;
  //   document.body.style.backgroundColor = `rgb(${red}, ${red}, ${red})`;
    

  // } else if(e.keyCode == 40 && red < 255){
  
  //   console.log(`wcisnieta strzalka w dół, ${red}`)
  //   red +=10;
  //   document.body.style.backgroundColor = `rgb(${red}, ${red}, ${red})`;
  // } 

  const key = e.keyCode

  switch(key) {
    case 38:
      console.log(`strzalka w górę`);
      if(red > 0){
          console.log(`wcisnieta strzalka go gory, ${red}`)
          red -=10;
          document.body.style.backgroundColor = `rgb(${red}, ${red}, ${red})`;}
      break;
    case 40:
      console.log(`strzałka w doł`);
      if (red < 255){
          console.log(`wcisnieta strzalka w dół, ${red}`)
          red +=10;
          document.body.style.backgroundColor = `rgb(${red}, ${red}, ${red})`;}
          break; 
    default: break
    
  }

}

window.addEventListener('keydown', changeColor)