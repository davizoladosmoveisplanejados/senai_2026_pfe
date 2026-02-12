//alert('Eu estou aprendendo o DOM e sou um bom aluno!');
//alert('Eu estou aprendendo o DOM e meu professor é top!'); 
let fundo = document.getElementById('corpo');
let fundoPagina = document.querySelector('#corpo');//seletor id
//document.getElementByName('corpo');
//document.querySelector('.corpo'); //seletor class
const titulo = document.querySelector('.titulo');

fundo.style.backgroundColor = '#2dcc24';
titulo.style.color = '#fff';
titulo.style.fontSize = '100px';
titulo.textContent += 'Sesi Mirandópolis';