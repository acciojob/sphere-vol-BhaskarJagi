function volume_sphere(event) {

	event.preventDefault()
    const radius = document.getElementById('radius').value
	let volume = (radius*radius*radius*3.1415929*4/3).toFixed(4)
	document.getElementById('volume').value = volume;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
