const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');



// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

function adicionaTech (event){
    let elementTech = document.querySelector('.tech');
    elementTech.classList.remove('tech');
    event.target.classList.add('tech');
   
}
firstLi.addEventListener('click', adicionaTech);
secondLi.addEventListener('click', adicionaTech);
thirdLi.addEventListener('click', adicionaTech);


// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

function addFrase(event) {
    let adicionaFrase = document.querySelector('.tech');
    adicionaFrase.innerText = event.target.value;
};
input.addEventListener('input', addFrase);

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?
function meuFB(event){
    window.location.replace('https://www.facebook.com/zero.gui1/')

}
myWebpage.addEventListener('dblclick', meuFB);


// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
function entraCor (event){
    myWebpage.style.color = 'rgb(21, 255, 0)'
    
}
function saiCor(event){
    myWebpage.style.color = 'white'
}

myWebpage.addEventListener('mouseover', entraCor);
myWebpage.addEventListener('mouseleave', saiCor);



// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);
secondLi.addEventListener('dblclick', resetText);
thirdLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.