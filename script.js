function volume_sphere() {
    //Write your code here
  const form = document.getElementById("MyForm")
	 const volume = document.getElementById("volume")
	 const radius = document.getElementById("radius")

	form.addEventListener("submit" , (event)=>{
		event.preventDefault();
		 const r = parseFloat(radius.value); 
	const pi = Math.PI;
            const sphereVolume = (4 / 3) * pi * Math.pow(r, 3);
            volume.value = sphereVolume.toFixed(4);
		
	})
} 
 volume_sphere()
/*function volume_sphere() {
    const form = document.getElementById("MyForm");
    const radiusInput = document.getElementById("radius");
    const volumeInput = document.getElementById("volume");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the form from reloading the page

        const r = parseFloat(radiusInput.value); // Get the radius as a number
        if (isNaN(r) || r <= 0) {
            volumeInput.value = "Invalid radius! Enter a positive number.";
        } else {
            const pi = Math.PI;
            const sphereVolume = (4 / 3) * pi * Math.pow(r, 3); // Calculate volume
            volumeInput.value = sphereVolume.toFixed(2); // Display the volume
        }
    });
}

// Call the function to activate it
volume_sphere();
*/

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
