const app = "I don't do much."
var dodger = document.getElementById('dodger')
dodger.style.backgroundColor = '#FF69B4'
document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
    moveDodgerLeft()
    console.log(dodger.style.left)

  }
  if (e.which === 39) {
    moveDodgerRight()
    console.log(dodger.style.right)
  }
})

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)

  if (left > 0) {
    dodger.style.left = `${right - 10}px`
  }
}
function moveDodgerRight() {
  var rightNumbers = dodger.style.right.replace('px', '')
  console.log(rightNumbers)
  var right = parseInt(rightNumbers, 10)

  if (right > 0) {
    dodger.style.left = `${right - 10}px`
  }
}
