var sidePlanetContainer = document.getElementById("test")
var sidePlanet = document.getElementById("planet-side")

sidePlanetContainer.addEventListener('mousedown', function() {
    this.style.top = '75%'
    this.style.opacity = "1"
});

sidePlanet.addEventListener('mousedown', function() {
    this.style.width = '15vh'
})