// const colorChange = document.getElementById('logo')


var logo = document.getElementById('logo')

logo.addEventListener("mouseover", function() {
    logo.style.color = 'red'
})

logo.addEventListener("mouseout", function() {
    logo.style.color = ''

})

var skill = document.getElementsByClassName('nav-thing')

for (let i = 0; i < skill.length; i++) {
    skill[i].addEventListener("mouseover", function() {
        this.style.color = 'red'
    })
    skill[i].addEventListener("mouseout", function() {
        this.style.color = 'black'
    })
}





// const list = document.querySelectorAll('nav-thing');
// for (let word of list) {
//     word.addEventListener("mouseover", function() {
//         this.style.color = 'pink'
//     })
// }