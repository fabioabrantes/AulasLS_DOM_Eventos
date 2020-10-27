// adicionando texto
let saudacao1 =  () => {
  const nomeUsuario = "fabio"
  const elemento = document.querySelector(".top-bar p")
  elemento.textContent += nomeUsuario
  console.log(elemento.textContent)
  const elementoBar = document.querySelector(".top-bar")
  //elemento.style.display ="block"
  console.log(elementoBar.innerText)
  console.log(elementoBar.innerHTML)
  
  
}
//saudacao1()


// adicionando tags html
let saudacao2 = function () {
  const nomeUsuario = "fabio"
  const elemento = document.querySelector(".top-bar p")
  elemento.innerHTML += "<b>" + nomeUsuario + "</b>"
   
  }

  // escondendo um elemento
  let saudacao3 = function () {
    const nomeUsuario = null
    const elemento = document.querySelector(".top-bar p")
    if(nomeUsuario){
      elemento.innerHTML += "<b>" + nomeUsuario + "</b>"
    }else{
      //elemento.parentElement.style.display = "none"
      elemento.parentElement.style.visibility = "hidden"
    }
     
  }

  // removendo um elemento
  let saudacao4 = function () {
    const nomeUsuario = null
    const elemento = document.querySelector(".top-bar p")
    if(nomeUsuario){
      elemento.innerHTML += "<b>" + nomeUsuario + "</b>"
    }else{
      //elemento.remove()
     const paiElemento = elemento.parentElement
     //paiElemento.remove()
     paiElemento.removeChild(elemento)
    } 
  }
  //saudacao4()

  // criando um elemento - append e insertBefore
  let saudacao5 = function () {
    const nomeUsuario = "Daniel"

    if (nomeUsuario) {
        const topBarElemento = document.createElement("div")
        topBarElemento.className = "top-bar"
        //topBarElemento.textContent = nomeUsuario
        topBarElemento.innerHTML = `<p> Olá, <b> ${nomeUsuario} </b></p>`

        const elementoPai = document.querySelector(".hero")
        elementoPai.insertBefore(topBarElemento, elementoPai.firstElementChild)
        console.log(elementoPai.firstChild)

    }

}
//saudacao5()

const elementDiv = document.createElement("div")
elementDiv.className = "top-bar"
        //topBarElemento.textContent = nomeUsuario
elementDiv.innerHTML = `<p> Olá, <b> fabio </b></p>`
const elementoPai = document.querySelector(".hero-content")

elementoPai.insertBefore(elementDiv, elementoPai.lastElementChild)

const filhos = elementoPai.children;
console.log(filhos);
for(let i = 0 ; i<filhos.length;i++){
  console.log(filhos[i].nodeName);
}