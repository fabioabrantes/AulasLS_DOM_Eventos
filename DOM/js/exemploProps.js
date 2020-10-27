const txtNome = document.querySelector("#txtNome")
const txtEmail = document.querySelector("#txtEmail")
const labelContrato = document.querySelector("label[for='contrato']")
txtNome.value = "Daniel"
txtNome.disabled = true
console.log(txtNome.value)
console.log(labelContrato.htmlFor)
console.log(txtEmail.maxLength)
console.log(txtEmail.type)

txtEmail.readOnly = false
txtEmail.maxLength = 30