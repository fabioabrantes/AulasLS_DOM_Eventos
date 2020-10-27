function myFunction() {
  var x = document.getElementsByTagName("DIV")[0];
  
  if (x.id === "myDIV") { 
    x.style.fontSize = "30px";
    x.className = 'mystyle2'
    x.textContent = x.className
  }
}