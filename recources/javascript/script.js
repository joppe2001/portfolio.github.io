const init = () => {
    //All your code 
    var circle = document.getElementById("p-under")


    circle.addEventListener('click', function() {
        this.style.color = 'red'
    })
}
document.addEventListener("DOMContentLoaded", init);