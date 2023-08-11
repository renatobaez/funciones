const key = document.getElementById("key")

const keys = {
	'a': 'pink',
  's': 'orange',
  'd': 'skyblue'
}
key.style.backgroundColor = 'white'
key.style.width = '200px'
key.style.height = '200px'
key.style.border = 'solid 1px black'

document.addEventListener('keydown', function(event){
  if(event.key === 'a'){
  	key.style.backgroundColor = keys['a']
  } else if(event.key === 's'){
  	key.style.backgroundColor = keys['s']
  } else if(event.key === 'd'){
  	key.style.backgroundColor = keys['d']
  } else if(event.key === 'q'){
  	createDiv('purple')
  } else if(event.key === 'w'){
  	createDiv('gray')
  } else if(event.key === 'e'){
		createDiv('brown')
  }
})

function createDiv(color){
	let div = document.createElement('div');
  div.style.backgroundColor = color
  div.style.width = '200px'
	div.style.height = '200px'
	document.body.appendChild(div)
}