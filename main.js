let heart = document.createElement('div')
heart.className = 'heart1'

document.body.appendChild(heart)

var dargging = false
var lastX
var lastY


heart.onmousedown = function (e) {
    lastX = e.clientX
    lastY = e.clientY
    dargging = true
}
document.onmousemove = function (e) {
    if (dargging === true) {
        var deltaX = e.clientX - lastX
        var deltaY = e.clientY - lastY
        var top = parseInt(heart.style.top) || 0
        var left = parseInt(heart.style.top) || 0
        console.log(e.clientX, e.clientY)
        heart.style.top = top + deltaX + 'px'
        heart.style.left = left + deltaX + 'px'
        lastX = e.clientX
        lastY = e.clientY
    }
}
heart.onmouseup = function () {
    dargging = false
}