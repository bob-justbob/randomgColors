const colors = ['blue', 'yellow', 'black', 'red', 'brown', 'orange'];

const btn = document.querySelector('button');
const h2 = document.querySelector('h2');

btn.addEventListener('click', () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)]

    const sec = document.querySelector('section');

    sec.style.background = randomColor;
   h2.innerHTML = randomColor;
})