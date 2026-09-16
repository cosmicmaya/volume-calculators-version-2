let rect_button = document.getElementById('calculate_rect');
let clear_answer_rect = document.getElementById('clear_rect')

function rect_volume() {
    let height = document.getElementById('rect_height').value;
    let width = document.getElementById('rect_width').value;
    let length = document.getElementById('rect_length').value;
    let real_rect_volume = height * width * length

    if (isNaN(height) && isNaN(width) && isNaN(length)) {
        document.getElementById('introduction').textContent = "ADD VALUES AND TRY AGAIN"
    } else {
        document.getElementById('introduction').textContent = "THE ANSWER IS"
        document.getElementById('value').textContent = height + " x " + width + " x " + length + " = " + real_rect_volume.toFixed(2)
        document.getElementById('coolguy').style.opacity = 1.0
    }
}

function clear() {
    document.getElementById('introduction').textContent = ""
    document.getElementById('value').textContent = ""
    document.getElementById('coolguy').style.opacity = 0

    document.getElementById('rect_height').value = ""
    document.getElementById('rect_width').value = ""
    document.getElementById('rect_length').value = ""
}


rect_button.onclick = () => {
    rect_volume()
}

clear_answer_rect.onclick = () => {
    clear()
}