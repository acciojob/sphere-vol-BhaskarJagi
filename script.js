function volume_sphere(event) {

	event.preventDefault()
    const radius = document.getElementById('radius').value
	const volume = radius*radius*radius*3.14159*4/3
	document.getElementById('volume').value = volume;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
