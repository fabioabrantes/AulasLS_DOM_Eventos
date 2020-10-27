function createH1() {
  const titleH1 = document.createElement('h1');
  titleH1.setAttribute("id", 'title1');
  titleH1.setAttribute('style', 'color:red;');
  const textTitle = document.createTextNode('Aula de LS sobre DOM');
  titleH1.appendChild(textTitle)
  const container = document.querySelector('.container');
  container.appendChild(titleH1);
}
//createH1();

function useInsertBefore(){

  const container = document.querySelector('.container');
  const title2 = document.createElement('h1');
  title2.textContent = 'aula de ls com text content';
  container.insertBefore(title2,container.firstElementChild.nextElementSibling.nextElementSibling);
}

//useInsertBefore();

function useCloneNode(){
  const container = document.querySelector('.container');
  let cloneContainer = container.cloneNode(true);
  const body = document.querySelector('body');
  body.insertBefore(cloneContainer, container);

}
//useCloneNode();
function useClone(){
  const subLista = document.querySelector('.container ul ul');
  const sublistClone = subLista.cloneNode(true);
  const container = document.querySelector('.container');
  const lista = document.querySelector('ul');
  container.insertBefore(sublistClone, lista);
}
// append e prepend

function useAppend(){
  const subTitle2 = document.querySelector('.container h2');
  const container = document.querySelector('.container');
  subTitle2.textContent = "fabio abrantes diniz";
  const subTitle3 = subTitle2.cloneNode(subTitle2);
  container.append(subTitle3, 'texto adicionado');
  container.prepend(subTitle2, 'texto adicionado');
}
//useAppend();

// after e before 
function useAfterBefore(){
  const container = document.querySelector('.container');
  const filho = container.firstElementChild;
  const paragrafo = document.createElement('p');
  paragrafo.textContent = "tudo bem adicionado a p";
  const cloneParagrafo = paragrafo.cloneNode(true);
  filho.after(paragrafo);
  filho.before(cloneParagrafo); 
 
}

//useAfterBefore()

// after e before 
function useAtributos(){
  const container = document.querySelector('.container');
  const filho = container.firstElementChild;
  filho.className = 'paragrafo1';
  filho.style.background = 'red';
  filho.setAttribute('id', 'idParagrafo1')
 
}
//useAtributos();