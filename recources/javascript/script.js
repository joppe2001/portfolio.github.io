var sidePlanetContainer1 = document.getElementById("planet1")
var sidePlanetContainer2 = document.getElementById("planet2")
var sidePlanetContainer3 = document.getElementById("planet3")
var sidePlanetContainer4 = document.getElementById("planet4")
var sidePlanetContainer5 = document.getElementById("planet5")
var sidePlanet1 = document.getElementById("planet-side1")
var sidePlanet2 = document.getElementById("planet-side2")
var sidePlanet3 = document.getElementById("planet-side3")
var sidePlanet4 = document.getElementById("planet-side4")
var sidePlanet5 = document.getElementById("planet-side5")
var winnerMsg = document.getElementById("winner-message")


sidePlanetContainer1.addEventListener('mousedown', function() {
    this.style.top = '80%'
    this.style.opacity = "1"
    sidePlanet1.style.width = '15vh'
    showMessage();
});
sidePlanetContainer2.addEventListener('mousedown', function() {
    this.style.top = '65%'
    this.style.opacity = "1"
    sidePlanet2.style.width = '15vh'
    showMessage();

});
sidePlanetContainer3.addEventListener('mousedown', function() {
    this.style.top = '15%'
    this.style.opacity = "1"
    sidePlanet3.style.width = '15vh'
    showMessage();
});
sidePlanetContainer4.addEventListener('mousedown', function() {
    this.style.top = '80%'
    this.style.opacity = "1"
    sidePlanet4.style.width = '15vh'
    showMessage();
});
sidePlanetContainer5.addEventListener('mousedown', function() {
    this.style.top = '15%'
    this.style.opacity = "1"
    sidePlanet5.style.width = '15vh'
    showMessage();
});


function showMessage() {
    if (sidePlanetContainer1.style.opacity === '1' && sidePlanetContainer2.style.opacity === '1' && sidePlanetContainer3.style.opacity === '1' && sidePlanetContainer4.style.opacity === '1' && sidePlanetContainer5.style.opacity === '1') {
        setTimeout(() => { alert('well done, u have found them all') }, 500)

    }
};

console.log(sidePlanetContainer1.style.opacity);