const burger = document.getElementById('burger-icon')
const burgerBar = document.getElementById('burger-icon__bar')
const timeFrame = getComputedStyle(burgerBar).transitionDuration.replace('s', '') * 1000

let lockBurger = false

burger.addEventListener('click', () => {
    if (lockBurger) return

    if (burger.classList.contains('second-scene')) {
        lockBurger = true

        endAnimSecondScene()

        setTimeout(() => {
            endAnimFirstScene()
            lockBurger = false
        }, timeFrame);

        return
    }

    lockBurger = true

    startAnimFirstScene()

    setTimeout(() => {
        startAnimSecondScene()
        lockBurger = false
    }, timeFrame);
})

function startAnimFirstScene() {
    burger.classList.add('first-scene')
}

function startAnimSecondScene() {
    burger.classList.add('second-scene')
}

function endAnimFirstScene() {
    burger.classList.remove('first-scene')
}

function endAnimSecondScene() {
    burger.classList.remove('second-scene')
}