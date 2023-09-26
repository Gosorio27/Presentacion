const button = document.getElementById('btn');
const body = document.querySelector('body');
const container = document.getElementById('container');
const text = document.getElementById('text'); 
const nav = document.querySelector('a');
let toggle = true;

const cambiarColor = () => {
    console.log(nav)
    toggle = !toggle;
    if (toggle) {
        body.style.backgroundColor = '#222';
        text.style.color = '#fff'; 
        nav.style.color = '#fff'; 
        container.style.backgroundColor = '#222';
    } else {
        body.style.backgroundColor = '#fff';
        text.style.color = '#222'; 
        nav.style.color = '#222'; 
        container.style.backgroundColor = '#fff';
    }
};

button.addEventListener('click', cambiarColor);
