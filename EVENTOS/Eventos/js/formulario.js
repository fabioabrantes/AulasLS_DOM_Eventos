// verificar o contador de caracteres de
    const txtDescricao = document.getElementById("txtDescricao");
    const contadorContainer = document.getElementById("contador");
    contadorContainer.style.display = "block";
    const restaSpan = contadorContainer.getElementsByTagName("span")[0];
    

    function mostrarNumero(n) {
        restaSpan.textContent = n
    }

    function checkLength() {
        let numeroLetrasDigitdas = this.value.length
        let caractersRestantes = parseInt(maxima) - parseInt(numeroLetrasDigitdas)
        mostrarNumero(caractersRestantes)
    }
    const maxima = txtDescricao.maxLength
    mostrarNumero(maxima)
    txtDescricao.addEventListener("input", checkLength);
     
// aqui desabilita o botão submit se o check estiver desabilitado
    const btn = document.getElementById("btn");
    btn.disabled = true

    const chkAceito = document.getElementById("chkAceito")
    chkAceito.addEventListener("change", function () {
        btn.disabled = !this.checked
    })

    // funcao que mostra a msg e oculta a msg em css
    const feedbackMessage = document.getElementById("feedbackMessage")
    const feedbackMessageCloseBtn = feedbackMessage.getElementsByTagName("button")[0]
    
    function showErrorMessage(msg, callback) {
        feedbackMessage.classList.add("show")// para aparecer o css. a div está oculta
        feedbackMessage.getElementsByTagName("p")[0].textContent = msg
        feedbackMessageCloseBtn.focus();
        // fechando a mensagem
        function hideErrorMessage() {
           
            feedbackMessage.classList.remove("show")
            if (typeof callback === "function") {
                feedbackMessageCloseBtn.removeEventListener("click", hideErrorMessage)
                callback()
            }
            
        }   
        feedbackMessageCloseBtn.addEventListener("click", hideErrorMessage)
    }
  // verificar se o campo titulo está preenchido. se não tiver mostrar a msg
  const txtTitulo = document.getElementById("txtTitulo")
  const formCadastro = document.querySelector(".formCadastro")

  formCadastro.addEventListener("submit", function (e) {
     
      if (!txtTitulo.value) {
          showErrorMessage("Preencha todos os campos", function () {
              txtTitulo.focus()
          })
          e.preventDefault()

      }
  })

    

  

    

    




    
    

    

    

   
    

    

