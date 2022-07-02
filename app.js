document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid.div')
    const scoreDisplay = document.querySelector('span')
    const startBtn = document.querySelector('.start')

    const width = 10
    let currentIndex = 0
    let appleIndex = 0
    let currentSnake = [2,1,0]

    let direction = 1
    let score = 0
    let speed = 0.9
    let intervalTime = 0
    let interval = 0

    function control(e) {
        squares[currentIndex].classList.remove('snake')

        if(e.keycode === 39) {
            direction = 1 // if we press the right arrow key the snake will go right one
        } else if (e.keycode === 38) {
            direction = -width // if we press the up arrow key the snake will go back 10 divs appearing to go up
        } else if (e.keycode === 37) {
            direction = -1  // if we press left the snake will go left one div
        } else if (e.keycode ===40) {
            direction = +width  // if we press the up down key the snake head will instantly appear in the div 10 divs from where you are now
        }

    }
   })

