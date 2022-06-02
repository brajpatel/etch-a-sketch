const DEFAULT_SIZE  = 16
const DEFAULT_COLOR = '#171717'

let currentSize = DEFAULT_SIZE
let currentColor = DEFAULT_COLOR

function setColor(newColor) {
    currentColor = newColor
}

function setCurrSize(newSize) {
    currentSize = newSize
}

const colorPick = document.getElementById('color-pick')
const gridSizeVal = document.getElementById('grid-size')
const gridSlider = document.getElementById('grid-slider')
const grid = document.getElementById('grid')
const removeLines = document.getElementById('remove-lines')
const clearBtn = document.getElementById('clear-btn')

colorPick.oninput = (e) => setColor(e.target.value)
clearBtn.onclick = () => reloadGrid()
gridSlider.onmousemove = (e) => updateSizeValue(e.target.value)
gridSlider.onchange = (e) => changeSize(e.target.value)

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function changeSize(value) {
    setCurrSize(value)
    updateSizeValue(value)
    reloadGrid()
}

function updateSizeValue(value) {
    gridSizeVal.innerHTML = `${value} x ${value}`
}

function reloadGrid() {
    clearGrid()
    makeGrid(currentSize)
}

function clearGrid() {
    grid.innerHTML = null
}

function makeGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
    for(let i = 0; i < (size * size); i++) {
        let cell = document.createElement('div')
        cell.classList.add('grid-item')
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = currentColor
        })

        grid.appendChild(cell)
    }
}

window.onload = () => {
    makeGrid(DEFAULT_SIZE)
}