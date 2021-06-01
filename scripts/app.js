const colors = ['red', 'green', 'blue', 'yellow', 'purple'];
const btn = document.querySelector('.btn');
const color = document.querySelector('.color')

btn.addEventListener('click', function(){
    const randomColor = getRandomColor();
    document.body.style.backgroundColor  = colors[randomColor]
    color.textContent = colors[randomColor]
})

function getRandomColor(){
    return Math.floor(Math.random() * colors.length)
}

// console.log(getRandomColor())