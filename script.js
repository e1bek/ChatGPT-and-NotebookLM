// setTimeout(function () {
//     console.log('2 after 2 sec')
// }, 2000 )

// let interval = setInterval(function () {
//     console.log('har 1 sec')
// }, 1000)

// clearInterval(interval)

const showBtn = document.getElementById('show-btn')
const modal = document.getElementById('modal')
const closeBtn = document.getElementById('close-btn')
const overlay = document.getElementById('overlay')

const removeHidden = () => {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

const addHidden = () => {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

showBtn.addEventListener('click', removeHidden)

closeBtn.addEventListener('click', addHidden)

overlay.addEventListener('click', addHidden)

document.addEventListener('keydown', e => {
    if (e.key == 'Escape') {
        addHidden()
    }
})

// setTimeout(function () {
//     removeHidden()
// }, 3000
// )

const loader = document.querySelector('.loader-wripper')
setTimeout(function () {
    loader.style.display = 'none'
}, 1000
)


const countEl = document.getElementById('count')
let seconds

function autoCloseModal(){
    removeHidden()
    seconds = 5

    let timer = setInterval(() => {
        countEl.innerText = 'yopish:' + seconds

        if (seconds === 0) {
            clearInterval(timer)
            addHidden()
        }

        seconds--
    }, 1000)
}

setTimeout(autoCloseModal, 4000)

setTimeout(autoCloseModal, 4000)


