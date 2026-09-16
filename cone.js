
let cone_button = document.getElementById('calculate_cone');
let clear_answer_cone = document.getElementById('clear_cone')


function cone_volume() {
    let height = document.getElementById('cone_height').value;
    let radius = document.getElementById('cone_radius').value;
    let base_area = Math.PI * Math.pow(radius, 2)
    let real_cone_volume = base_area * height * (1 / 3)

    if (isNaN(height) && isNaN(radius)) {
        document.getElementById('introduction').textContent = "ADD VALUES AND TRY AGAIN"
    } else if (isNaN(height)) {
        document.getElementById('introduction').textContent = "ADD HEIGHT AND TRY AGAIN"
    } else if (isNaN(radius)) {
        document.getElementById('introduction').textContent = "ADD RADIUS AND TRY AGAIN"
    } else {
        document.getElementById('introduction').textContent = "THE ANSWER IS"
        document.getElementById('value').textContent = "1/3 x π x " + radius + "^2 x " + height + " = " + real_cone_volume.toFixed(2)
        document.getElementById('coolguy').style.opacity = 1.0
    }
}



function clear() {
    document.getElementById('introduction').textContent = ""
    document.getElementById('value').textContent = ""
    document.getElementById('coolguy').style.opacity = 0

    document.getElementById('cone_height').value = ""
    document.getElementById('cone_radius').value = ""
}


cone_button.onclick = () => {
    cone_volume()
}


clear_answer_cone.onclick = () => {
    clear()
}