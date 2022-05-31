function cancelaEnviar(event) {
    event.preventDefault();
  }


function botaoLimpar() {
    const input = document.querySelectorAll('input');
    const textArea = document.querySelector('textarea');
    for (let i = 0; i < input.length; i += 1) {
      const userInput = input[i];
      userInput.value = '';
      userInput.checked = false;
    }
    textArea.value = '';
  }

const button = document.querySelector('#submit-btn');
button.addEventListener('click', cancelaEnviar);
const limpar = document.querySelector('#clear-btn');
limpar.addEventListener('click', botaoLimpar);
