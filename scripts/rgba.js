const btn = document.querySelector('.btn');
const color = document.querySelector('.color');

btn.addEventListener('click', ()=> {
    const newColor = getRandomColor();
    document.body.style.backgroundColor = newColor
    color.textContent = newColor
});

function getRandomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`
}


