const btn = document.getElementById('btn')
const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')


function add(num1, num2) {
    return num1 + num2
}

btn.addEventListener('click', function () {
    console.log(add(num1.value, num2.value))
})