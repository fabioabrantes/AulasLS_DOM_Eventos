const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number +1));
}

function bgChange(e) {
  const rndCol =
    "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
  document.getElementById('button2').style.backgroundColor = rndCol;
  e.target.style.backgroundColor = rndCol;
  console.log(e);
}
function bgChange2(e) {
  
  document.getElementById('button2').style.width = '300px';
  console.log(e.target);
  console.log(e.currentTarget);
  console.log(this);
}

//btn.onclick = bgChange;
//btn.addEventListener('mouseover', bgChange);
//btn.addEventListener('mouseover', bgChange2);

 btn.addEventListener('click', (e) => {
  console.log(this);
  console.log(e.target);
  console.log(e.currentTarget);
}) 

//subistituir por:
// btn.onfocus, btn.onblur, btn.ondblclick, btn.onmouseover e btn.onmouseout 
//window.onkeypress, window.onkeydown, window.onkeyup
