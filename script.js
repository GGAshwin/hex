const colors = ["#8fbaff", "#ff4255", "#ff4d88", "#ababab", "#8cddff"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
    const randomNumber = getrandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    document.getElementById('color').innerText = colors[randomNumber];
})
function getrandomNumber() {
    return Math.floor(Math.random() * colors.length);
}