var circle = document.getElementById("test")

const changeColor = () => {
    circle.style.color = 'red'
}

circle.addEventListener('mouseover', changeColor)
circle.addEventListener('mouseout', function() {
    circle.style.color = ''
})