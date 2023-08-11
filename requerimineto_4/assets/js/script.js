const color1 = document.getElementById("color1")
const color2 = document.getElementById("color2")
const color3 = document.getElementById("color3")
const color4 = document.getElementById("color4")

color1.style.backgroundColor = 'blue'
color1.style.width = '200px'
color1.style.height = '200px'

color2.style.backgroundColor = 'red'
color2.style.width = '200px'
color2.style.height = '200px'

color3.style.backgroundColor = 'green'
color3.style.width = '200px'
color3.style.height = '200px'

color4.style.backgroundColor = 'yellow'
color4.style.width = '200px'
color4.style.height = '200px'

color1.addEventListener("click", () => color1.style.backgroundColor = 'black')
color2.addEventListener("click", () => color2.style.backgroundColor = 'black')
color3.addEventListener("click", () => color3.style.backgroundColor = 'black')
color4.addEventListener("click", () => color4.style.backgroundColor = 'black')