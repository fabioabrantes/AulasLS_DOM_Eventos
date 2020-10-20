const txtEmail = document.getElementById("txtEmail")
const msgFeedback = document.getElementById("newsletterFeedback")

function emailValid(email){
    // código de valiacao no futuro
    
    return true
}

function cadastrarEmail() {
    let email = txtEmail.value // email = ""
    // validações do email
    
    if(email && emailValid(email)){
     msgFeedback.innerHTML = `O email ${email} foi cadastrado com sucesso`
    }
}

