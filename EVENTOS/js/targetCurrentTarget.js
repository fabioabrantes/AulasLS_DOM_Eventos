function myFunction(event) { 
  alert(event.currentTarget.nodeName); // body
  alert(event.target.nodeName); // strong
}