let sphere_button = document.getElementById('calculate_sphere')
let clear_answer_sphere = document.getElementById('clear_sphere')

function sphere_volume() {
    let radius = document.getElementById('sphere_radius').value;

    let real_sphere_volume = Math.PI * Math.pow(radius, 3) * (4 / 3)


    if (isNaN(radius)) {
        document.getElementById('introduction').textContent = "ADD VALUE AND TRY AGAIN"
    } else{
        document.getElementById('introduction').textContent = "THE ANSWER IS"
        document.getElementById('value').textContent = "4/3 x π x " + radius + "^3 = " + real_sphere_volume.toFixed(2)
        document.getElementById('coolguy').style.opacity = 1.0

    }

}


function clear() {
    document.getElementById('introduction').textContent = ""
    document.getElementById('value').textContent = ""
    document.getElementById('coolguy').style.opacity = 0

    document.getElementById('sphere_radius').value = ""
}

sphere_button.onclick = () => {
    sphere_volume()
}

clear_answer_sphere.onclick = () => {
    clear()
}