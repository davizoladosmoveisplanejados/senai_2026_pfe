const corpo = document.querySelector('body');
const titulo = document.querySelector('.titulo');
const container = document.querySelector('#container');
const imagem = document.querySelector('#imagem');
const botao = document.querySelector('.botao');

corpo.style.backgroundColor = '#006437';
corpo.style.color = 'white';
titulo.textContent = 'Adicionando elemento via JS';
container.style.width = '94%';
container.style.margin = '0 auto';
container.style.backgroundColor = '#004d2a';

let anuncio = '<h2>Curso Dev com IA - Novidade!!!</h2>';
container.innerHTML += anuncio;

//adicionando atributos
imagem.setAttribute('src', './exercicio1/pkirk.jpg');
//imagem.removeAttribute('src'); //remove atributos

//adicionando classes
imagem.classList.add('imagem');

//eventos
let contador = 0
botao.addEventListener('click',( ) => {
    console.log("Cliquei no botão" + contador++);
});