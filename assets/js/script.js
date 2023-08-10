const ele = document.getElementById("ele1")

// 3.2 
ele.addEventListener("click", () => ele.style.backgroundColor = 'yellow')

/* 3.3 */
function pintar(color="green"){
	ele.style.backgroundColor = color
}
ele.addEventListener("click", function() {
	pintar("yellow")
})