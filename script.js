let count = 0;

const button = document.getElementById('clickButton');
const button1 = document.getElementById('clickButton1');
const display = document.getElementById('clickCount');

button.addEventListener('click', () => {
    count++;
    display.textContent = count;
});

button1.addEventListener('click', () => {  // Aqui estava o erro, agora corrigido para addEventListener
    count--;
    display.textContent = count;
});