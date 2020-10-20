const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * number);
}

function bgChange() {
  const rndCol =
    "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
  document.body.style.backgroundColor = rndCol;
  //e.target.style.backgroundColor = rndCol;
  //console.log(e);
}

btn.onclick = bgChange;
//btn.addEventListener('click', bgChange);
// subistituir por:
// btn.onfocus, btn.onblur, btn.ondblclick, btn.onmouseover e btn.onmouseout 
//window.onkeypress, window.onkeydown, window.onkeyup
//