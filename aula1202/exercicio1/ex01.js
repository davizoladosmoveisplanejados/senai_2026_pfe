const titulo = document.querySelector('.titulo');
const container = document.querySelector('.container');
const img = document.querySelector('.imagem');
const corpo = document.querySelector('body');
corpo.style.backgroundColor = '#847146';
let uc = '<h2>Programação Front-End</h2>';
let image = '<img src="./pkirk.jpg" width=40%>';
titulo.textContent = "Bem-Vindo ao SENAI!";
titulo.style.textAlign = 'center';
container.style.width = '94%';
container.style.textAlign = 'center';
container.innerHTML += uc;
img.innerHTML += image;
img.style.display = 'flex';
img.style.justifyContent = 'center';



