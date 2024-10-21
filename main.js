import './style.css'

const div = document.createElement('div');
div.classList.add('calculator');
document.body.appendChild(div);

const divScreen = document.createElement('div');
divScreen.classList.add('screen');
divScreen.id = 'screen';
div.appendChild(divScreen);

const buttons = document.createElement('ul');
buttons.classList.add('buttons');
buttons.id = 'buttons';
div.appendChild(buttons);

const teclas = ['C', '-', '/', '*', '7', '8', '9','-', '4', '5', '6', '+', '1', '2', '3', 'equal', '0', '.'];

teclas.forEach(() => {
  const li = document.createElement('li');
  const a = document.createElement('a');

  
});



