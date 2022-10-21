const hex = '01234567890ABCDEF';
const btn = document.getElementById('btn');
const color = document.querySelector('#color');
const copy=document.querySelector('#copy')

btn.addEventListener('click', function () {
    let hexcolor = "#";
    for (let i = 1; i <=6; i++) {
        hexcolor += hex[getrandomNumber()];
    }
    document.getElementById('color').value = hexcolor;
    document.body.style.backgroundColor = hexcolor;
})

function getrandomNumber() {
    return Math.floor(Math.random() * hex.length);
}

copy.addEventListener('click',()=>{
    color.select();
    navigator.clipboard.writeText(color.value)
    alert("Color copied")
})
