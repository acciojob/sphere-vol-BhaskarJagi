function volume_sphere(event) {

	event.preventDefault()
    const radius = document.getElementById('radius').value
	const volume = radius*22/7
	document.getElementById('volume').value = volume;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
