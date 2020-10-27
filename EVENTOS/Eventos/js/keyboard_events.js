const msg = document.getElementById("msg")
function keypress(e) {// funciona somente caracterese alfanuméricos
  console.log("keypress")
  console.log(this.value)
}

function keydown(e) {
  console.log("keydown")
  console.log(this.value)
}

function keyup(e) {
  console.log("keyup")
  console.log(this.value)
}
msg.addEventListener("keypress", keypress)
msg.addEventListener("keyup", keyup)
msg.addEventListener("keydown", keydown)