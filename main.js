import './style.css';

const div = document.createElement('div');
div.classList.add('calculator');
document.body.appendChild(div);

const divScreen = document.createElement('div');
divScreen.classList.add('screen');
divScreen.id = 'screen';
divScreen.textContent = '0';
div.appendChild(divScreen);

const buttons = document.createElement('ul');
buttons.classList.add('buttons');
buttons.id = 'buttons';
div.appendChild(buttons);

const mockData = [
  {textContent: "C", "data-key": "clear"},
  {textContent: "-", "data-key": "-"},
  {textContent: "/", "data-key": "/"},
  {textContent: "X", "data-key": "*"},
  {textContent: "7", "data-key": "7"},
  {textContent: "8", "data-key": "8"},
  {textContent: "9", "data-key": "9"},
  {textContent: "-", "data-key": "-"},
  {textContent: "4", "data-key": "4"},
  {textContent: "5", "data-key": "5"},
  {textContent: "6", "data-key": "6"},
  {textContent: "+", "data-key": "+"},
  {textContent: "1", "data-key": "1"},
  {textContent: "2", "data-key": "2"},
  {textContent: "3", "data-key": "3"},
  {textContent: "=", "data-key": "equal", class: "equal tall"},
  {textContent: "0", "data-key": "0", class: "wide shift"},
  {textContent: ".", "data-key": ".", class: "shift"}
];

mockData.map(object => {
  const li = document.createElement('li');
  const a = document.createElement('a');

  a.href = '#';
  a.dataset.key = object['data-key'];
  a.textContent = object.textContent;
  
  if (object.class) {
    a.className = object.class;
  }

  li.appendChild(a);
  buttons.appendChild(li);
});

let valorActual = '';


const actualizarPantalla = (value) => {
  if (divScreen.style.fontSize === '1rem') {
    divScreen.style.fontSize = '3rem';
  }
  divScreen.textContent = value;
};

const botonesClick = (key) => {
  if (key === 'clear') {
    valorActual = '';
    actualizarPantalla('0');
  } else if (key === 'equal') {
    if (valorActual === '') return;
    try {
      const resultado = eval(valorActual);
      actualizarPantalla(String(resultado));
    } catch (error) {
      actualizarPantalla(error.message);
      divScreen.style.fontSize = '1rem';
      valorActual = '';
    }
  } else {
      valorActual += key;
      actualizarPantalla(valorActual);
  }
};

buttons.querySelectorAll('a').forEach(button => {
  button.addEventListener('click', (e) => {
    const key = e.target.dataset.key;
    botonesClick(key);
  });
});
