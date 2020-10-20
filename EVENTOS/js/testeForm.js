let form = document.querySelector('form');
let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let submit = document.getElementById('submit');
let para = document.querySelector('p');

form.onsubmit = function(e) {
  if (fname.value === '' || lname.value === '') {
    e.preventDefault(); // pevine o comportamento padrão de enviar para o servidor
    para.textContent = 'você precisa preencher completamente todos os campos!';
  }else{
    alert('cadastro realizado com sucesso')
  }
}